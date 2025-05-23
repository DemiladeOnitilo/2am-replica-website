import React from "react";
import { useSelector } from "react-redux";
import { talents } from "../components/home/talents";
import { useParams } from "react-router-dom";

const Talents = () => {
  const { id } = useParams();

  const currentUser = useSelector((state) => state.user.currentUser)
  const talent = talents.find((item) => item.id === id);
  const currentUserTalent = currentUser.find((user) => user.name === currentUser.name)

  return <div>
    <div>
      <img src={talent.image ? talent.image : "https://2am.ng/wp-content/uploads/2024/08/360_F_417452781_3zAgEnknPGOhnpoM78VWK7G1zd9JKgvD-150x150.jpg"} alt={talent.name} />
      <h1>{talent.name ? talent.name : currentUserTalent.name}</h1>
      <p>{talent.salary ? talent.salary : currentUserTalent.minimumRate}</p>
      <p>{talent.country ? talent.country : currentUserTalent.location}</p>
    </div>
  </div>;
};

export default Talents;
