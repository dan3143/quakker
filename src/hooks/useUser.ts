import { useState } from "react";
import mockUsers from "mocks/users";
import User from "types/user";

const useUsers = () : [User[], (searchId: string) => User|undefined, (user: User) => void, (id: number) => void] => {
    const [users, setUsers] = useState(mockUsers);
    const getUser = (searchId: string) => users.find(user => user.username === searchId);
    const addUser = (user: User) => setUsers([...users, user]);
    const removeUser = (id: number) => setUsers(users.filter(user => user.id !== id)); 
    return [users, getUser, addUser, removeUser];
}

export default useUsers;