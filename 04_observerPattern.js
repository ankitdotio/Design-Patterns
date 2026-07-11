//pub sub model

class YoutubeChannel {
  constructor(name) {
    this.name = name;
  }

  subscribers = [];

  Subscribe(user) {
    this.subscribers.push(user);
    console.log(`${user.name}, you have subscribed the channel ${this.name}`);
  }
  Unsubscribe(user) {
    this.subscribers = this.subscribers.filter((u) => u != user);
    console.log(`${user.name}, you have unsubscribed the channel ${this.name}`);
  }
  notify(message) {
    this.subscribers.forEach((user) => user.update(message));
  }
}

class User {
  constructor(name) {
    this.name = name;
  }
  update(message) {
    console.log(`USER ${this.name}, MESSAGE - ${message}`);
  }
}

const channel1 = new YoutubeChannel("ankitdotio");
const user1 = new User("Ankit");
const user2 = new User("Ansh");
const user3 = new User("Harsh");

channel1.Subscribe(user1);
channel1.Subscribe(user2);
channel1.Subscribe(user3);

channel1.notify("NEW VIDEO UPLOADED!!");
