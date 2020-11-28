import React, { useState } from "react";
import { person } from "../../../jsModules/displayFunctions/formNavigation";
import UserForm from "../form/UserForm";
import Contact from "./Contact";
import Person from "./Person";
import Private from "./Private";
import ProfileNav from "./ProfileNav";
import Work from "./Work";
import WorkLoad from "./WorkLoad";
import { deleteUser } from "../../../jsModules/dbData/deleteData";
import DeleteModal from "../overview/DeleteModal";
import { showCardList } from "../../../jsModules/displayFunctions/subMenuNavigation";

export default function ViewProfile(props) {
  console.log("administration/viewProfile || ViewProfile.js | ViewProfile()");

  const mappedPerson = props.user.map((user) => <Person key={user.id} {...user} />);
  const mappedWork = props.user.map((user) => <Work key={user.id} {...user} />);
  const mappedContact = props.user.map((user) => <Contact key={user.id} {...user} />);
  const mappedPrivate = props.user.map((user) => <Private key={user.id} {...user} />);

  async function deleteProfile(id) {
    console.log("administration/viewProfile || ViewProfile.js | deleteProfile()");
    deleteUser(id);
    document.querySelector(".ViewProfile").classList.add("hide");
    document.querySelector(".UserList").classList.remove("hide");
    document.querySelector(".modal-wrapper").classList.add("hide");
    showCardList();
  }

  return (
    <section className="ViewProfile hide">
      <ul className="viewPerson">{mappedPerson}</ul>
      <ul className="viewWork">{mappedWork}</ul>
      <ul className="viewContact">{mappedContact}</ul>
      <WorkLoad users={props.users.filter((person) => person.id === props.id)} />
      <ul className="viewPrivate admin">{mappedPrivate}</ul>

      <div className="empty"></div>
      <ProfileNav id={props.id} editProfile={props.editProfile} setSystemPart={props.setSystemPart} />
      <UserForm
        chosenUser={props.chosenUser}
        setChosenUser={props.setChosenUser}
        id={props.id}
        state={props.state}
        setState={props.setState}
      />
      <DeleteModal deleteProfile={deleteProfile} id={props.id} systemPart={props.systemPart} />
    </section>
  );
}
