import React from "react";
import { UserContext } from "../context/context";
import Card from "../UI/card";

const AllData = () => {
  const ctx = React.useContext(UserContext);
  const userList = ctx.users.map((user) => {
    return (
      <React.Fragment key={user.id}>
        <tr>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.password}</td>
          <td>{user.balance}</td>
        </tr>
      </React.Fragment>
    );
  });
  return (
    <>
      <Card
        bgcolor=""
        txtcolor="black"
        header="All User Data"
        body={
          <>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">NAME</th>
                  <th scope="col">EMAIL</th>
                  <th scope="col">PASSWORD</th>
                  <th scope="col">BALANCE</th>
                </tr>
              </thead>
              <tbody>{userList}</tbody>
            </table>
          </>
        }
      />
    </>
  );
};

export default AllData;
