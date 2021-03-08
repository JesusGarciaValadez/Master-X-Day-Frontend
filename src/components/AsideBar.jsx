import React, { useState, useEffect } from 'react';
import Trello from '../api/models/Trello';

import '../styles/AsideBar.scss';

const trello = new Trello({

});

export default function AsideBar() {
  const [boardId, setBoardsId] = useState([]);
  const [userMembership, setUserMembership] = useState([]);

  useEffect(async () => {
    const { idBoards } = await trello.getUserInformation();
    setBoardsId(idBoards);
    const boardMemberships = await trello.getMembershipsOfABoardById(idBoards[0]);
    const memberships = boardMemberships.map(membership => trello.getMemberById(membership.idMember));
    console.log(await memberships);
  }, []);

  return (
    <div className='asidebarContainer'>
      <h1>Members</h1>
      <ul></ul>
      <h2>Lists:</h2>
      { boardId.map((id) => <p key={id}>{id}</p>) }
      <h3>Cards:</h3>
      {}
    </div>
  );
}
