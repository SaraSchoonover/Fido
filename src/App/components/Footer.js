import React from 'react';
import { Button } from 'reactstrap';
import { signInUser } from '../../helpers/auth';

export default function Footer() {
  return (
    <>
      <footer className="page-footer">
        <Button color="link" onClick={signInUser}>Admin</Button>
    </footer>
  </>
  );
}
