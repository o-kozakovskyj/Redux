import React from 'react';

const User = ({ name, age }) => (
  <li>
    <span className="user__name">{name}</span>
    <span className="user__age">{age}</span>
  </li>
);

export default User;
