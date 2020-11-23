import React, { useState } from "react";
import UserList from "./UserList";
import ViewProfile from "../viewProfile/ViewProfile";
import FilterUsers from "../../navigation/FilterUsers";
export default function MainAdmin(props) {
  const [id, setId] = useState();

  return (
    <main className={window.innerWidth < 1000 ? "MainAdmin hide" : "MainAdmin"}>
      <FilterUsers
        setChosenDivision={props.setChosenDivision}
        setChosenHours={props.setChosenHours}
        setSearch={props.setSearch}></FilterUsers>
      <UserList
        setId={setId}
        users={
          props.chosenHours !== (undefined && "") &&
          props.chosenDivision !== (undefined && "") &&
          props.search !== (undefined && "")
            ? props.users.filter(
                (user) =>
                  user.division.includes(props.chosenDivision) &&
                  user.workHours.includes(props.chosenHours) &&
                  (user.name.toLowerCase().includes(props.search.toLowerCase()) ||
                    user.position.toLowerCase().includes(props.search.toLowerCase()) ||
                    user.workHours.toLowerCase().includes(props.search.toLowerCase()))
              )
            : props.chosenHours !== (undefined && "")
            ? props.users.filter((user) => user.workHours.includes(props.chosenHours))
            : props.chosenDivision !== (undefined && "")
            ? props.users.filter((user) => user.division.includes(props.chosenDivision))
            : props.search !== (undefined && "")
            ? props.users.filter((user) => user.name.toLowerCase().includes(props.search.toLowerCase()))
            : props.users
        }
      />
      <ViewProfile
        user={props.users.filter((person) => person.id === id)}
        users={props.users}
        id={id}
        setUsers={props.setUsers}
      />
    </main>
  );
}
