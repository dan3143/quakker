import { useState } from "react";
import mock_users from "mocks/users.json";

interface User {
    id: number;
    username: string;
    name: string;
    profilePic: string;
}

const useUsers = () : [User[], (searchId: number) => User|undefined, (user: User) => void, (id: number) => void] => {
    const tmpUsers: User[] = mock_users;
    const [users, setUsers] = useState(tmpUsers);
    const getUser = (searchId: number) => users.find(user => user.id === searchId);
    const addUser = (user: User) => setUsers([...users, user]);
    const removeUser = (id: number) => setUsers(users.filter(user => user.id !== id)); 
    return [users, getUser, addUser, removeUser];
}

export default useUsers;