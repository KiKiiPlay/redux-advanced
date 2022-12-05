import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import addToFavourite from "../redux/actions";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  // dispatch will allow this component to dispatch actions!
  // in order to make them reach the reducer(s)
  const favBook = useSelector((state) => state.favJobs);
  // username when the app loads is an empty string
  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col>
        <Button
          color="primary"
          onClick={() => {
            dispatch(addToFavourite(data.id));
          }}
        >
          Add to favs
        </Button>
      </Col>
    </Row>
  );
};

export default Job;
