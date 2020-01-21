import { title } from "assets/jss/nextjs-material-kit.js";

const workStyle = {
  section: {
    padding: "70px 0"
  },
  title: {
    ...title,
    marginBottom: "50px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center"
  },
  description: {
    color: "#999",
    textAlign: "center"
  },
  error: {
    color: "#4E77C3",
    textAlign: "center"
  },
  success: {
    color: "#4caf50",
    textAlign: "center"
  },
  textCenter: {
    textAlign: "center"
  },
  textArea: {
    marginRight: "15px",
    marginLeft: "15px"
  },
  formControl: {
    display: 'flex',
    flexDirection: 'row',
    color: "#999"
  }
};

export default workStyle;
