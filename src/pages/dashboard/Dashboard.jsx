import React, { useEffect, useState } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, ArcElement } from "chart.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersAction } from "../../features/users/userAction";
import { fetchBorrowsFromDate } from "../../features/borrow/borrowAxios";
import { getAllContactAction } from "../../features/contact/contactAction";
import { fetchUnreadMessages } from "../../features/contact/contactAxios";
import { getAllBorrowsAction } from "../../features/borrow/borrowAction";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, ArcElement);

const Dashboard = () => {
  const [booksBorrowedThisWeek, setBooksBorrowedThisWeek] = useState(0);
  const [unreadMessage, setUnreadMessage] = useState(0);
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.bookInfo);
  const { users } = useSelector((state) => state.userInfo);
  const { borrows } = useSelector((state) => state.borrowInfo);
  const { contacts } = useSelector((state) => state.contactInfo);

  useEffect(() => {
    const fetchBorrows = async () => {
      const today = new Date();
      const lastWeekDate = new Date(today);
      lastWeekDate.setDate(today.getDate() - 30);
      const formattedDate = lastWeekDate.toISOString().split("T")[0];

      try {
        const response = await fetchBorrowsFromDate(true, formattedDate);
        const borrows = response ? response.borrows : [];
        setBooksBorrowedThisWeek(borrows.length);

        const { unreadContacts } = (await fetchUnreadMessages()) || [];
        setUnreadMessage(unreadContacts.length);
      } catch (error) {
        console.error("Error fetching borrows:", error);
      }
    };

    dispatch(getAllContactAction());
    dispatch(fetchUsersAction("student"));
    dispatch(getAllBorrowsAction());
    fetchBorrows();
  }, [dispatch]);

  const getLast4WeeksLabels = () => {
    const today = new Date();
    return Array.from({ length: 4 }, (_, i) => {
      const weekStart = new Date(today);
      weekStart.setDate(today.getDate() - (3 - i) * 7);
      return weekStart.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    });
  };

  const getLast4WeeksData = (borrows) => {
    const today = new Date();
    const weeksData = Array(4)
      .fill(0)
      .map((_, i) => {
        const weekStart = new Date(today);
        weekStart.setDate(today.getDate() - (3 - i) * 7);
        const weekEnd = new Date(today);
        weekEnd.setDate(today.getDate() - (2 - i) * 7);
        return { start: weekStart, end: weekEnd };
      });

    return weeksData.map((week) => {
      return borrows.filter((borrow) => {
        const borrowDate = new Date(borrow.createdAt);
        return borrowDate >= week.start && borrowDate < week.end;
      }).length;
    });
  };

  const barData = {
    labels: getLast4WeeksLabels(),
    datasets: [
      {
        label: "Books Borrowed",
        data: getLast4WeeksData(borrows),
        backgroundColor: "#1e88e5",
      },
    ],
  };

  const getLast6MonthsLabels = () => {
    const today = new Date();
    return Array.from({ length: 6 }, (_, i) => {
      const month = new Date(today.getFullYear(), today.getMonth() - (5 - i));
      return month.toLocaleDateString("en-US", { month: "short", year: "numeric" });
    });
  };

  const getNewUsersRegisteredData = (users) => {
    const today = new Date();
    const monthsData = Array.from({ length: 6 }, (_, i) => {
      const monthStart = new Date(today.getFullYear(), today.getMonth() - (5 - i), 1);
      const monthEnd = new Date(today.getFullYear(), today.getMonth() - (4 - i), 1);
      return { start: monthStart, end: monthEnd };
    });

    return monthsData.map((month) => {
      return users.filter((user) => {
        const userCreatedAt = new Date(user.createdAt);
        return userCreatedAt >= month.start && userCreatedAt < month.end;
      }).length;
    });
  };

  const lineData = {
    labels: getLast6MonthsLabels(),
    datasets: [
      {
        label: "New Users Registered",
        data: getNewUsersRegisteredData(users),
        borderColor: "#43a047",
        tension: 0.4,
        fill: false,
      },
    ],
  };

  const pieData = {
    labels: Array.from(new Set(borrows.map((borrow) => borrow.bookId.category))),
    datasets: [
      {
        label: "Categories Borrowed",
        data: Array.from(new Set(borrows.map((borrow) => borrow.bookId.category))).map(
          (category) => borrows.filter((borrow) => borrow.bookId.category === category).length
        ),
        backgroundColor: [
          "#00bcd4",
          "#009688",
          "#4caf50",
          "#8bc34a",
          "#cddc39",
          "#ffeb3b",
          "#ffc107",
          "#ff9800",
          "#ff5722",
          "#f44336",
          "#e91e63",
          "#9c27b0",
          "#673ab7",
          "#3f51b5",
          "#2196f3",
          "#03a9f4",
        ],
      },
    ],
  };

  const getMessagesReceivedData = (contacts) => {
    const today = new Date();
    const binsData = Array.from({ length: 7 }, (_, i) => {
      const startDay = new Date(today);
      startDay.setDate(today.getDate() - (i * 2 + 2));
      const endDay = new Date(today);
      endDay.setDate(today.getDate() - i * 2);
      return { start: startDay, end: endDay };
    });

    return binsData.map((bin) => {
      return contacts.filter((contact) => {
        const contactCreatedAt = new Date(contact.submittedAt);
        return contactCreatedAt >= bin.start && contactCreatedAt < bin.end;
      }).length;
    });
  };

  const messagesReceivedData = {
    labels: Array.from({ length: 7 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - i * 2);
      return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    }).reverse(),
    datasets: [
      {
        label: "Messages Received",
        data: getMessagesReceivedData(contacts),
      },
    ],
  };

  return (
    <UserLayout pageTitle="Dashboard">
      <Container fluid>
        <Row className="mb-4">
          <Col md={3}>
            <Card className="text-center" style={{ backgroundColor: "#ff9800", color: "#fff" }}>
              <Card.Body>
                <Card.Title>Total Books</Card.Title>
                <Card.Text>
                  <h2>{books.length}</h2>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="text-center" style={{ backgroundColor: "#ff5722", color: "#fff" }}>
              <Card.Body>
                <Card.Title>Active Members</Card.Title>
                <Card.Text>
                  <h2>{users.length}</h2>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="text-center" style={{ backgroundColor: "#03a9f4", color: "#fff" }}>
              <Card.Body>
                <Card.Title>Borrows This Month</Card.Title>
                <Card.Text>
                  <h2>{booksBorrowedThisWeek}</h2>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="text-center" style={{ backgroundColor: "#4caf50", color: "#fff" }}>
              <Card.Body>
                <Card.Title>Unread Messages</Card.Title>
                <Card.Text>
                  <h2>{unreadMessage}</h2>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6}>
            <Card style={{ height: "300px" }}>
              <Card.Body>
                <Card.Title>Books Borrowed Over the Past 4 weeks</Card.Title>
                <div style={{ height: "200px" }}>
                  <Bar data={barData} options={{ maintainAspectRatio: false }} />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card style={{ height: "300px" }}>
              <Card.Body>
                <Card.Title>Books Borrowed by Category</Card.Title>
                <div style={{ height: "200px" }}>
                  <Pie data={pieData} options={{ maintainAspectRatio: false }} />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6}>
            <Card style={{ height: "300px" }}>
              <Card.Body>
                <Card.Title>New Users Registered By Month</Card.Title>
                <div style={{ height: "200px" }}>
                  <Line data={lineData} options={{ maintainAspectRatio: false }} />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card style={{ height: "300px" }}>
              <Card.Body>
                <Card.Title>Messages Received Over the Past Week</Card.Title>
                <div style={{ height: "200px" }}>
                  <Bar data={messagesReceivedData} options={{ maintainAspectRatio: false }} />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </UserLayout>
  );
};

export default Dashboard;
