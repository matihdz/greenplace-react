import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Copyright = (props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      {"Greenplace "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export const AuthLayout = ({ children }) => {
  return (
    <Container component="div" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "white",
          padding: 2,
          borderRadius: 1,
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main", color: "white" }}>
          <LockOutlinedIcon />
        </Avatar>
        {children}
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};
