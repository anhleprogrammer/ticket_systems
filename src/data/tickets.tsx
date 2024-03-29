const tickets = [
  {
    id: 1,
    name: "Bob",
    subject: "Where is my order?",
    created: "11/1/2023, 8:03:00 AM",
    status: "Pending",
    priority: "Low",
    description: "I cannot see my order, please assist me",
    agent: "Anh Le",
    messages: [
      {
        message: "I cannot see my order, can you check it for me please?",
        timestamp: "11/1/2023",
        reply:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  },
  {
    id: 2,
    name: "West",
    subject: "Email address change",
    created: "9/30/2023, 7:53:00 PM",
    status: "Open",
    priority: "High",
    description: "I need assist with changing email address",
    agent: "Anh Le",
    messages: [
      {
        message: "I cannot change my email address",
        timestamp: "11/1/2023",
        reply:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  },
  {
    id: 3,
    name: "Sarah",
    subject: "Payment failed",
    created: "8/29/2023, 7:57:00 AM",
    status: "Pending",
    priority: "Medium",
    description: "I cannot process my payment",
    agent: "Anh Le",
    messages: [
      {
        message: "Can you help with my payment issue, please?",
        timestamp: "11/1/2023",
        reply:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  },
  {
    id: 4,
    name: "Emily",
    subject: "Missing items",
    created: "7/28/2023, 7:58:00 PM",
    status: "Pending",
    priority: "Low",
    description: "My order has missing items",
    agent: "Anh Le",
    messages: [
      {
        message: "I don't know why my order missing 2 items?",
        timestamp: "11/1/2023",
        reply:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  },
  {
    id: 5,
    name: "Zac",
    subject: "Missing items",
    created: "6/27/2023, 7:58:00 AM",
    status: "Pending",
    priority: "Low",
    description: "My order has missing items",
    agent: "Anh Le",
    messages: [
      {
        message: "I don't know why my order missing 2 items?",
        timestamp: "11/1/2023",
        reply:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  },
  {
    id: 6,
    name: "John",
    subject: "Delayed delivery",
    created: "5/26/2023, 11:12:01 PM",
    status: "Pending",
    priority: "Medium",
    description: "My package is delayed, need assistance",
    agent: "Jessica Smith",
    messages: [
      {
        message: "Hi, my package is delayed",
        timestamp: "11/1/2023",
        reply:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  },
  {
    id: 7,
    name: "Ivan",
    subject: "Wrong product received",
    created: "4/25/2022, 7:45:00 AM",
    status: "Pending",
    priority: "High",
    description: "I received the wrong item in my order",
    agent: "Michael Johnson",
    messages: [
      {
        message: "Hi Anh, I received the wrong item",
        timestamp: "11/1/2023",
        reply:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  },
  {
    id: 8,
    name: "David",
    subject: "Billing discrepancy",
    created: "3/24/2023, 7:40:00 PM",
    status: "Pending",
    priority: "Medium",
    description: "There is a discrepancy in my bill, need clarification",
    agent: "Emily Thompson",
    messages: [
      {
        message:
          "Hi Anh, there is a discrepancy in my bill, need clarification",
        timestamp: "11/1/2023",
        reply:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  },
  {
    id: 9,
    name: "Sophia",
    subject: "Product return request",
    created: "2/23/2023, 7:35:00 AM",
    status: "Pending",
    priority: "Low",
    description: "I would like to initiate a return for my purchase",
    agent: "Daniel Miller",
    messages: [
      {
        message: "Hi, I would like to initiate a return for my purchase",
        timestamp: "11/1/2023",
        reply: "Could you share your order number, please?",
      },
    ],
  },
  {
    id: 10,
    name: "Oliver",
    subject: "Account access issue",
    created: "10/22/2023, 7:30:00 PM",
    status: "Pending",
    priority: "Medium",
    description: "I am unable to access my account, need assistance",
    agent: "Emma Wilson",
    messages: [
      {
        message: "Hi, I am unable to access my account, need assistance",
        timestamp: "11/1/2023",
        reply:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  },
  {
    id: 11,
    name: "Ava",
    subject: "Defective product",
    created: "10/21/2022, 7:25:00 AM",
    status: "Pending",
    priority: "High",
    description: "The product I received is defective, need a replacement",
    agent: "Benjamin Davis",
    messages: [
      {
        message: "The product I received is defective, need a replacement",
        timestamp: "11/1/2023",
        reply:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  },
];

export { tickets };
