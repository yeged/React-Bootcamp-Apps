/* eslint-disable no-console */
import { useEffect, useState } from "react";
import firebase from "../firebase/firebase";
import _ from "lodash";
import Chat from "../models/Chat";
import Room from "../models/Rooms";
import User from "../models/Users"
import Moment from "moment"



export const GetRoomNames = (deps = []) => {
  const [data, setData] = useState([]);

  const roomNamesRef = firebase.database().ref("rooms/");
  useEffect(() => {
    async function fetchData() {
      roomNamesRef.on("value", (snapshot) => {
        const roomData = snapshot.val();
        const rooms = [];
        for (const key in roomData) {
          rooms.push(new Room(_.toLower(key), _.startCase(_.toLower(key))));
        }
        setData(rooms);
      });
    }
    fetchData();
    return () => {
      roomNamesRef.off("value")
    }
  }, deps);

  return [data, setData];
};


export const GetData = (roomName) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const messageRef = firebase.database().ref(`rooms/${roomName}`);
    async function fetchData() {
      messageRef.on("value", (snapshot) => {
        const posts = snapshot.val();
        const loadedPosts = [];
        for (const key in posts) {
          loadedPosts.push(new Chat(key, posts[key].name, posts[key].message, posts[key].lastTime));
        }
        setData(loadedPosts);
        console.log("loadedPosts", loadedPosts)
      });
    }
    roomName.length && fetchData();
    return () => {
      messageRef.off("value")
    }
  }, [roomName]);

  return [data, setData];
};


export const setDataToDatabase = (name, message, roomName) => {
  console.log("clicked setDataToDatabase");
  if (roomName.length) {
    firebase.database().ref(`rooms/${roomName}`).push({
      name: name,
      message: message,
      lastTime: Moment(new Date()).format('HH:mm'),
    });
  }
};

export const createRoomDatabase = (name, message, roomName) => {
  firebase.database().ref(`rooms/${roomName}`).push({
    name: name,
    message: message,
    lastTime: Moment(new Date()).format('HH:mm'),
  });
};


export const GetOnlineNumber = (selectedRoom) => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState([])
  useEffect(() => {
      const userOnlineRoomRef = firebase.database().ref("status/");
      async function fetchData() {
      userOnlineRoomRef.on("value", (snapshot) => {
        const roomData = snapshot.val();
        let users = [];
        let usersCount = []
        for (const key in roomData) {
          if (roomData[key].room.length) {
            usersCount.push(roomData[key].room);
          }
          if (roomData[key].room.length && roomData[key].room === selectedRoom) {
            users.push(new User(key, roomData[key].username, roomData[key].room));
          }
        }
        console.log("users", users)
        setData(users);
        usersCount.length &&
          setCount(
            usersCount.reduce((obj, key) => {
              obj[key] = (obj[key] || 0) + 1; 
              return obj;
            }, {})
          );
      });
     }
    fetchData()
      return () => {
        userOnlineRoomRef.off("value")
      }

  }, [selectedRoom]);
  return [count, data];
};
