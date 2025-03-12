import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Badge,
  Popover,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "@/store";
import { logoutUser } from "@/store/slices/user/authSlice";
import { useNotificationContext } from "@/context/NotificationContext";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user.auth);
  const cartItems = useAppSelector((state) => state.cart.cart.carts);
  const { notifications, removeNotification } = useNotificationContext();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  const handleNotificationsClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationsClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ flexGrow: 1, textDecoration: "none", color: "inherit" }}
        >
          E-Commerce
        </Typography>
        <Button color="inherit" component={Link} to="/products">
          Products
        </Button>
        <IconButton color="inherit" component={Link} to="/cart">
          <Badge badgeContent={cartItems?.length || 0} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit" onClick={handleNotificationsClick}>
          <Badge badgeContent={notifications.length} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleNotificationsClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <List sx={{ width: 300 }}>
            {notifications.length === 0 ? (
              <ListItem>
                <ListItemText primary="No notifications" />
              </ListItem>
            ) : (
              notifications.map((notification) => (
                <ListItem
                  key={notification.id}
                  component="button"
                  onClick={() => removeNotification(notification.id)}
                >
                  <ListItemText primary={notification.message} />
                </ListItem>
              ))
            )}
          </List>
        </Popover>
        {user ? (
          <>
            <IconButton color="inherit" component={Link} to="/profile">
              <AccountCircleIcon />
            </IconButton>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </>
        ) : (
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
