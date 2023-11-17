import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const CopyrightInfo = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://p2s3.com/">
        Fachrur Razi.
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default CopyrightInfo;
