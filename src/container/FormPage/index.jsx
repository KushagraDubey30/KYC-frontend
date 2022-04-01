import "./index.css";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";
import Form from "../../components/Form";
const FormPage = () => {
  return (
    <>
      <div className="container-form-page">
        <CssBaseline />
        <Container component={Box} p={4}>
          <Paper component={Box} p={3}>
            <Form />
          </Paper>
        </Container>
      </div>
    </>
  );
};

export default FormPage;
