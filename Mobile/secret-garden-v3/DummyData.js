class User {
    username;
    password;
    isAdmin;

    constructor(username, password, isAdmin) {
        this.username = username;
        this.password = password;
        this.isAdmin = isAdmin;
    }
}

let user1 = new User("Karen", "Password1234!", false);
let user2 = new User("Charlie", "Password1234!", true);

export const Users = [
    user1,
    user2
];

class NewsLetter {
    title;
    text;
    constructor(title, text) {
        this.title = title;
        this.text = text;
    }
}

let nl1 = new NewsLetter("Swimming", "Reminder: Swimming tomorrow at 2pm for Grade R's. Please pack swimming costumes and a towel.");
let nl2 = new NewsLetter("Arts and Crafts", "Arts and Crafts Day is tomorrow! Please pack old clothes or a smock to protect your child’s clothing.");
let nl3 = new NewsLetter("Funday", "Friday FunDay! Big fun on Friday with activities and games planned. Please provide some tuk money for treats.");
let nl4 = new NewsLetter("Picture Day", "Fancy Dress Time! Picture Day is on the 30th of March. Dress up and smile!");
let nl5 = new NewsLetter("Sports Day", "Sports Day is coming! Scheduled for next Wednesday with events like soccer and touch rugby. Pack sporty clothes and sunscreen.");
let nl6 = new NewsLetter("Puppet Show", "Puppet Show this Thursday! Pack a snack and let your children enjoy the magic of puppetry.");
let nl7 = new NewsLetter("Spring Festival", "Join us for our annual Spring Festival next month. There will be lots of food, games, and fun activities for the whole family!");
let nl8 = new NewsLetter("Parent-Teacher Meetings", "Parent-Teacher meetings are scheduled for the last week of this month. Please sign up for a slot with your child’s teacher.");
let nl9 = new NewsLetter("Holiday Schedule", "Please note the school will be closed for the holidays starting December 20th. Classes will resume January 6th.");
let nl10 = new NewsLetter("Health Check Day", "Annual Health Check Day is coming up next Friday. A reminder to submit your child's health form by this Wednesday.");

export const newsletters = [
    nl1, nl2, nl3, nl4, nl5, nl6, nl7, nl8, nl9, nl10
];

class Message {
    sender;
    title;
    message;
    constructor(sender, title, message) {
        this.sender = sender;
        this.title = title;
        this.message = message;
    }
}

let msg1 = new Message("Teacher Jade", "Summer Camp Details", "Hi Charlie! The summer camp details will come in the next newsletter.");
let msg2 = new Message("Teacher Kira", "Unknown Charge", "Hi Charlie! That is odd, please can you email finance@secretgardennursery.co.za");
let msg3 = new Message("Teacher Jade", "Days Off", "Hi Charlie, days off are just the public holidays for now.");
let msg4 = new Message("Teacher Jade", "Activity Updates", "Hey Charlie, updates should be coming through the newsletters...");
let msg5 = new Message("Teacher Kira", "Volunteering", "Hello Charlie, just speak to me when fetching Abdul!");

export const messages = [
    msg1, msg2, msg3, msg4, msg5
];
