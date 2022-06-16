import React, { useEffect } from 'react';
import './style.css';
import {
  Table,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container,
  Row,
  Col,
} from 'reactstrap';

export default function App() {
  useEffect(() => {
    fetch('https://react-ljvmpx.stackblitz.io/data.json')
      .then((res) => res.json())
      .then((data) => {
        console.log('testing');
        console.log(data);
      });
    console.log('test');
  }, []);

  return (
    <Container>
      <h1>Post title</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illo
        fugiat labore assumenda illum, soluta doloremque temporibus blanditiis
        vel esse incidunt, impedit perferendis a dolor, quas iure quae?
        Assumenda eius dolore voluptas placeat, quam similique praesentium
        itaque fugit expedita debitis quisquam exercitationem fuga dolor
        inventore mollitia iste ex excepturi officiis.
      </p>
      <hr />
      <div>
        <h2>Comments</h2>
      </div>
    </Container>
  );
}
