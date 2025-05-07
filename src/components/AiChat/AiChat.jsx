import React, { useState, useEffect, useRef } from 'react';
import './Aichat.css';

const AIChat = () => {
  const [messages, setMessages] = useState([
    {
      text: "<strong>Welcome to the Digital Literacy Campaign!</strong> I'm here to help you learn how to use digital tools like WhatsApp, Paytm, and Google Maps. You can ask me anything or try one of the quick questions above.",
      sender: 'bot'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);
  const chatMessagesRef = useRef(null);

  const faqs = {
    whatsapp: {
      "send photo": {
        steps: [
          "1. Open WhatsApp and go to the chat where you want to send the photo",
          "2. Tap the '+' or paperclip icon",
          "3. Select 'Gallery' or 'Photos'",
          "4. Choose the photo you want to send",
          "5. Tap the send button (arrow icon)",
        ],
      },
      "create group": {
        steps: [
          "1. Open WhatsApp and go to the Chats tab",
          "2. Tap the three dots menu or 'New Chat'",
          "3. Select 'New group'",
          "4. Select contacts to add to the group",
          "5. Tap the green checkmark",
          "6. Enter a group name and tap 'Create'",
        ],
      },
      "make video call": {
        steps: [
          "1. Open WhatsApp and select a contact",
          "2. Tap the video camera icon at the top right",
          "3. Wait for the person to answer",
        ],
      },
      "delete message": {
        steps: [
          "1. Long-press the message you want to delete",
          "2. Tap the trash bin icon",
          "3. Choose 'Delete for everyone' or 'Delete for me'",
        ],
      },
      video: "https://www.youtube.com/watch?v=dd-5Rc6WT94",
    },
    paytm: {
      "send money": {
        steps: [
          "1. Open Paytm app and login",
          "2. Tap on 'Pay' or 'Bank Transfer'",
          "3. Enter the mobile number or scan QR code",
          "4. Enter the amount",
          "5. Add a note (optional)",
          "6. Tap 'Pay' and enter your UPI PIN",
        ],
      },
      "recharge mobile": {
        steps: [
          "1. Open Paytm app",
          "2. Tap on 'Mobile Recharge'",
          "3. Enter mobile number",
          "4. Select operator and circle",
          "5. Choose a recharge plan",
          "6. Tap 'Proceed to Pay'",
          "7. Complete payment using your preferred method",
        ],
      },
      "check balance": {
        steps: [
          "1. Open Paytm app",
          "2. Go to 'Passbook' or 'Bank Account'",
          "3. Tap on 'Check Balance'",
          "4. Enter your UPI PIN to view balance",
        ],
      },
      video: "https://www.youtube.com/watch?v=4GlMPJs5Wu4&t=28s",
    },
    "google maps": {
      "get directions": {
        steps: [
          "1. Open Google Maps app",
          "2. Tap the blue direction button",
          "3. Enter your starting location or use 'Current location'",
          "4. Enter destination",
          "5. Choose mode of transport",
          "6. Tap 'Start' to begin navigation",
        ],
      },
      "share location": {
        steps: [
          "1. Open Google Maps",
          "2. Tap the blue dot (your location)",
          "3. Tap 'Share location'",
          "4. Choose time duration",
          "5. Select contacts or apps",
          "6. Tap 'Share'",
        ],
      },
      "save favorite place": {
        steps: [
          "1. Search for a place on Google Maps",
          "2. Tap on the place name",
          "3. Tap 'Save' and choose a list (Favorites, Want to go)",
          "4. It will now appear under 'Your places'",
        ],
      },
      video: "https://www.youtube.com/watch?v=QULMYsdWXpU",
    },
    "google pay": {
      "send money": {
        steps: [
          "1. Open Google Pay",
          "2. Tap 'Pay phone number' or 'Scan QR code'",
          "3. Enter amount and optional message",
          "4. Tap 'Pay' and enter UPI PIN",
        ],
      },
      "check payment history": {
        steps: [
          "1. Open Google Pay",
          "2. Tap on your profile picture",
          "3. Select 'Payment Activity' to view history",
        ],
      },
      video: "https://www.youtube.com/watch?v=-Ougj4el-2g",
    },
    instagram: {
      "post photo": {
        steps: [
          "1. Open Instagram and tap '+' at the bottom",
          "2. Choose 'Post'",
          "3. Select a photo from your gallery",
          "4. Add caption, location, and tag people",
          "5. Tap 'Share'",
        ],
      },
      "reel upload": {
        steps: [
          "1. Tap '+' and select 'Reel'",
          "2. Record or upload a video",
          "3. Add music, text or filters",
          "4. Tap 'Next' and add caption",
          "5. Tap 'Share'",
        ],
      },
      video: "https://www.youtube.com/watch?v=ksFH1Ka8Nuo",
    },
    youtube: {
      "search video": {
        steps: [
          "1. Open YouTube app",
          "2. Tap the search icon",
          "3. Type your query and press 'Search'",
          "4. Tap a video to start watching",
        ],
      },
      "subscribe channel": {
        steps: [
          "1. Open a video or channel page",
          "2. Tap the red 'Subscribe' button",
          "3. Tap bell icon to get notifications",
        ],
      },
      "upload video": {
        steps: [
          "1. Tap the '+' icon at the bottom",
          "2. Select 'Upload a video'",
          "3. Choose or record a video",
          "4. Add title, description, and visibility",
          "5. Tap 'Upload'",
        ],
      },
      video: "https://www.youtube.com/watch?v=p4J44m2IG6o",
    },
    facebook: {
      "create post": {
        steps: [
          "1. Open Facebook app",
          "2. Tap 'What's on your mind?'",
          "3. Type your message",
          "4. Add photos or location if desired",
          "5. Tap 'Post'",
        ],
      },
      "add friend": {
        steps: [
          "1. Open Facebook app",
          "2. Search for the person's name",
          "3. Tap 'Add Friend' next to their profile",
        ],
      },
      video: "https://www.youtube.com/watch?v=BPE6G2kub8Q",
    },
    twitter: {
      tweet: {
        steps: [
          "1. Open Twitter app",
          "2. Tap the '+' or 'Tweet' button",
          "3. Type your message",
          "4. Tap 'Tweet' to post",
        ],
      },
      "follow user": {
        steps: [
          "1. Open Twitter app",
          "2. Search for the user's handle",
          "3. Tap 'Follow' on their profile",
        ],
      },
      video: "https://www.youtube.com/watch?v=85SAO5HYrjc",
    },
    snapchat: {
      "send snap": {
        steps: [
          "1. Open Snapchat app",
          "2. Tap the camera button to take a photo or hold to record a video",
          "3. Tap the arrow to send",
          "4. Select friends and tap 'Send'",
        ],
      },
      "add friend": {
        steps: [
          "1. Open Snapchat app",
          "2. Tap your profile icon",
          "3. Tap 'Add Friends'",
          "4. Search for username or scan Snapcode",
        ],
      },
      video: "https://www.youtube.com/watch?v=mEcJ4RGRFCE",
    },
    zoom: {
      "join meeting": {
        steps: [
          "1. Open Zoom app",
          "2. Tap 'Join a Meeting'",
          "3. Enter Meeting ID and your name",
          "4. Tap 'Join'",
        ],
      },
      "schedule meeting": {
        steps: [
          "1. Open Zoom app",
          "2. Tap 'Schedule'",
          "3. Set meeting details",
          "4. Tap 'Save'",
        ],
      },
      video: "https://www.youtube.com/watch?v=7ePBa90C4ig",
    },
    skype: {
      "make call": {
        steps: [
          "1. Open Skype app",
          "2. Tap 'Calls'",
          "3. Select a contact",
          "4. Tap the phone or video icon",
        ],
      },
      "send message": {
        steps: [
          "1. Open Skype app",
          "2. Tap 'Chats'",
          "3. Select a contact",
          "4. Type your message and tap 'Send'",
        ],
      },
      video: "https://www.youtube.com/watch?v=t85kRmsu3s8",
    },
    telegram: {
      "start chat": {
        steps: [
          "1. Open Telegram app",
          "2. Tap the pencil icon",
          "3. Select a contact",
          "4. Type your message and tap 'Send'",
        ],
      },
      "create channel": {
        steps: [
          "1. Open Telegram app",
          "2. Tap the menu icon",
          "3. Select 'New Channel'",
          "4. Set channel name and settings",
          "5. Add members",
        ],
      },
      video: "https://www.youtube.com/watch?v=xOTizhkdi6g",
    },
    spotify: {
      "play song": {
        steps: [
          "1. Open Spotify app",
          "2. Search for a song",
          "3. Tap the song to play",
        ],
      },
      "create playlist": {
        steps: [
          "1. Open Spotify app",
          "2. Go to 'Your Library'",
          "3. Tap 'Create Playlist'",
          "4. Name your playlist",
          "5. Add songs",
        ],
      },
      video: "https://www.youtube.com/watch?v=ijxzROsS1Pg",
    },
    netflix: {
      "watch show": {
        steps: [
          "1. Open Netflix app",
          "2. Browse or search for a show",
          "3. Tap the show to start watching",
        ],
      },
      "download episode": {
        steps: [
          "1. Open Netflix app",
          "2. Select a show",
          "3. Tap the download icon next to an episode",
        ],
      },
      video: "https://www.youtube.com/shorts/c3JU8ODh3EA",
    },
    amazon: {
      "place order": {
        steps: [
          "1. Open Amazon app",
          "2. Search for a product",
          "3. Select the product",
          "4. Tap 'Buy Now' or 'Add to Cart'",
          "5. Proceed to checkout and confirm order",
        ],
      },
      "track package": {
        steps: [
          "1. Open Amazon app",
          "2. Go to 'Your Orders'",
          "3. Select the order",
          "4. Tap 'Track Package'",
        ],
      },
      video: "https://www.youtube.com/watch?v=vhpC4m61w-o",
    },
    flipkart: {
      "search product": {
        steps: [
          "1. Open Flipkart app",
          "2. Tap on the search bar",
          "3. Enter product name and tap 'Search'",
          "4. Browse through the results and select a product",
        ],
      },

      "place order": {
        steps: [
          "1. Open Flipkart app",
          "2. Search for the product you want to buy",
          "3. Select the product and tap 'Buy Now' or 'Add to Cart'",
          "4. Proceed to checkout",
          "5. Enter delivery and payment details",
          "6. Confirm and place the order",
        ],
      },
      video: "https://www.youtube.com/watch?v=AB7SYWoy-uI",
    },
    swiggy: {
      "order food": {
        steps: [
          "1. Open Swiggy app",
          "2. Browse through available restaurants",
          "3. Select the food items you want to order",
          "4. Add to cart and proceed to checkout",
          "5. Enter delivery address and payment method",
          "6. Confirm and place your order",
        ],
      },
      "track order": {
        steps: [
          "1. Open Swiggy app",
          "2. Go to 'Orders'",
          "3. Select the active order",
          "4. Tap 'Track' to view order status",
        ],
      },
      video: "https://www.youtube.com/watch?v=62HD_2RJuWg",
    },
    ola: {
      "book ride": {
        steps: [
          "1. Open Ola app",
          "2. Enter your pickup location",
          "3. Enter destination and choose the type of ride",
          "4. Tap 'Book' to confirm the ride",
          "5. Wait for the driver to arrive",
        ],
      },
      "cancel ride": {
        steps: [
          "1. Open Ola app",
          "2. Go to 'Your Rides'",
          "3. Select the ride you want to cancel",
          "4. Tap 'Cancel Ride'",
        ],
      },
      video: "https://www.youtube.com/watch?v=Ho8qiFmNOlU",
    },
    uber: {
      "book ride": {
        steps: [
          "1. Open Uber app",
          "2. Enter your pickup location and destination",
          "3. Choose your ride type",
          "4. Tap 'Confirm Uber' to book the ride",
          "5. Wait for the driver to arrive",
        ],
      },
      "track ride": {
        steps: [
          "1. Open Uber app",
          "2. Go to 'Your Trips'",
          "3. Select the active ride to see its status",
        ],
      },
      video: "https://www.youtube.com/watch?v=rDXhupcZH4I",
    },
    myntra: {
      "search product": {
        steps: [
          "1. Open Myntra app",
          "2. Tap the search icon",
          "3. Enter product name or category",
          "4. Browse the results and select an item",
        ],
      },
      "place order": {
        steps: [
          "1. Open Myntra app",
          "2. Select the product and add to your cart",
          "3. Go to the cart and tap 'Buy Now'",
          "4. Choose your payment method",
          "5. Enter shipping details and confirm the order",
        ],
      },
      video: "https://www.youtube.com/watch?v=DriPP_TK38A",
    },
    airbnb: {
      "search accommodation": {
        steps: [
          "1. Open Airbnb app",
          "2. Enter your destination and travel dates",
          "3. Browse through available properties",
          "4. Select a property and review details",
        ],
      },
      "book accommodation": {
        steps: [
          "1. Open Airbnb app",
          "2. Choose a property and tap 'Book'",
          "3. Enter the required details (guests, payment)",
          "4. Confirm and complete the booking",
        ],
      },
      video: "https://www.youtube.com/watch?v=ZoxKQpl3fCQ",
    },
    zomato: {
      "order food": {
        steps: [
          "1. Open Zomato app",
          "2. Select a restaurant from available options",
          "3. Choose food items and add to cart",
          "4. Go to the cart and proceed to checkout",
          "5. Choose payment method and confirm order",
        ],
      },
      "rate restaurant": {
        steps: [
          "1. Open Zomato app",
          "2. Search for the restaurant",
          "3. Tap 'Rate & Review' button",
          "4. Choose the rating and leave a review",
        ],
      },
      video: "https://www.youtube.com/watch?v=7yQe-PYQ0CY",
    },
    bookmyshow: {
      "book movie tickets": {
        steps: [
          "1. Open BookMyShow app",
          "2. Search for a movie and select it",
          "3. Choose the showtime and theater",
          "4. Select the seats and proceed to payment",
          "5. Confirm the booking",
        ],
      },
      "cancel booking": {
        steps: [
          "1. Open BookMyShow app",
          "2. Go to 'Your Bookings'",
          "3. Select the booking you want to cancel",
          "4. Tap 'Cancel Booking' and confirm",
        ],
      },
      video: "https://www.youtube.com/watch?v=a-5zzM5TdOs",
    },
    linkedin: {
      "create profile": {
        steps: [
          "1. Open LinkedIn app",
          "2. Tap your profile picture or 'Profile' button",
          "3. Fill in your personal and professional details",
          "4. Tap 'Save' to complete your profile",
        ],
      },
      "send connection request": {
        steps: [
          "1. Open LinkedIn app",
          "2. Search for the person you want to connect with",
          "3. Tap 'Connect' on their profile",
          "4. Add a note (optional) and tap 'Send Invitation'",
        ],
      },
      video: "https://www.youtube.com/watch?v=nwzPMcosMYo",
    },
    snapdeal: {
      "search product": {
        steps: [
          "1. Open Snapdeal app",
          "2. Tap the search icon",
          "3. Enter the product name",
          "4. Browse through the results and select an item",
        ],
      },
      "place order": {
        steps: [
          "1. Open Snapdeal app",
          "2. Select the product you want to buy",
          "3. Tap 'Buy Now' and proceed to checkout",
          "4. Enter payment and shipping details",
          "5. Confirm your order",
        ],
      },
      video: "https://www.youtube.com/watch?v=eF1cvehJaOo",
    },
  };

  const quickQuestions = [
    "How to send photos on WhatsApp?",
    "How to transfer money with Paytm?",
    "How to get directions on Google Maps?",
    "How to create a WhatsApp group?"
  ];

  const formatStepsResponse = (steps, header, video) => {
    const htmlSteps = steps
      .map((step) => `<div class="step">${step}</div>`)
      .join("");
    return `<strong>${header}</strong>${htmlSteps} <a href="${video}" target="_blank" class="video-link">Watch Video</a> <p>Let me know if you learn or not ✅🚀 ? </p>`;
  };

  const getBotResponse = (message) => {
    message = message.toLowerCase();

    if (
        message.includes("hello") ||
        message.includes("hi") ||
        message.includes("hey")
      ) {
        return "Hello! How can I assist you today?\nYou can ask about WhatsApp, Paytm, Google Maps, and other apps.";
      }
  
      if (
        message.includes("how are you") ||
        message.includes("how is it going") ||
        message.includes("how are you doing")
      ) {
        return "I'm doing great, thank you for asking! How can I help you today?";
      }
  
      if (
        message.includes("help") ||
        message.includes("assistance") ||
        message.includes("support")
      ) {
        return "Sure! I can assist with step-by-step instructions on how to use apps like WhatsApp, Paytm, Google Maps, and more. What would you like to learn about?";
      }
  
      if (message.includes("thank you") || message.includes("thanks")) {
        return "You're welcome! Let me know if you need further assistance.";
      }
  
      if (
        message.includes("bye") ||
        message.includes("goodbye") ||
        message.includes("see you")
      ) {
        return "Goodbye! Have a great day! Feel free to return if you need more help.";
      }
  
      if (
        message.includes("what can you do") ||
        message.includes("what can you help with")
      ) {
        return "I can provide step-by-step instructions on how to use various apps like WhatsApp, Paytm, Google Maps, and more. Just ask!";
      }
  
      if (
        message.includes("how to use") ||
        message.includes("what is the guide for") ||
        message.includes("tell me how to")
      ) {
        return "I can help you with step-by-step guides for apps like WhatsApp, Paytm, Google Maps, and others. What would you like to know?";
      }
  
      if (
        message.includes("what is your name") ||
        message.includes("who are you")
      ) {
        return "I’m a digital assistant here to help you with step-by-step guides for various apps. How can I assist you today?";
      }
  
      if (
        message.includes("can you explain") ||
        message.includes("could you explain")
      ) {
        return "Sure! I can explain step-by-step how to use various apps. What do you need help with?";
      }
  
      if (
        message.includes("tell me") ||
        message.includes("show me") ||
        message.includes("give me") ||
        message.includes("show me how to")
      ) {
        return "I'd be happy to! What app or feature would you like help with?";
      }
  
      if (message.includes("what is") || message.includes("tell me about")) {
        return "Could you please specify which app or feature you'd like to know more about?";
      }
  
      if (
        message.includes("is there a tutorial") ||
        message.includes("is there a guide for")
      ) {
        return "Yes! I can guide you step-by-step for various apps. What would you like to learn?";
      }
  
      if (
        message.includes("can you help me") ||
        message.includes("can you assist me")
      ) {
        return "Absolutely! Just let me know what you need help with, and I’ll provide step-by-step instructions.";
      }
  
      if (
        message.includes("need help") ||
        message.includes("I need assistance")
      ) {
        return "I'm here to help! Please let me know which app or feature you need assistance with.";
      }
  
      if (message.includes("whatsapp")) {
        if (
          message.includes("photo") ||
          message.includes("picture") ||
          message.includes("image")
        ) {
          return formatStepsResponse(
            faqs.whatsapp["send photo"].steps,
            "Here's how to send a photo on WhatsApp:",
            faqs.whatsapp.video
          );
        }
        if (message.includes("group")) {
          return formatStepsResponse(
            faqs.whatsapp["create group"].steps,
            "Here's how to create a group on WhatsApp:",
            faqs.whatsapp.video
          );
        }
        return "I can help with WhatsApp features like:\n- Sending photos\n- Creating groups\nWhat would you like to know?";
      }
  
      if (message.includes("paytm")) {
        if (message.includes("money") || message.includes("send")) {
          return formatStepsResponse(
            faqs.paytm["send money"].steps,
            "Here's how to send money on Paytm:",
            faqs.paytm.video
          );
        }
        if (message.includes("recharge") && message.includes("mobile")) {
          return formatStepsResponse(
            faqs.paytm["recharge mobile"].steps,
            "Here's how to recharge your mobile on Paytm:",
            faqs.paytm.video
          );
        }
        return "I can help with Paytm features like:\n- Sending money\n- Mobile recharges\nWhat would you like to know?";
      }
  
      if (message.includes("google maps")) {
        if (message.includes("directions") || message.includes("navigate")) {
          return formatStepsResponse(
            faqs["google maps"]["get directions"].steps,
            "Here's how to get directions on Google Maps:",
            faqs["google maps"].video
          );
        }
        if (message.includes("location") || message.includes("share")) {
          return formatStepsResponse(
            faqs["google maps"]["share location"].steps,
            "Here's how to share your location on Google Maps:",
            faqs["google maps"].video
          );
        }
        return "I can help with Google Maps features like:\n- Getting directions\n- Sharing your location\nWhat would you like to know?";
      }
  
      if (message.includes("flipkart")) {
        if (message.includes("order") || message.includes("place")) {
          return formatStepsResponse(
            faqs.flipkart["place order"].steps,
            "Here's how to place an order on Flipkart:",
            faqs.flipkart.video
          );
        }
        if (message.includes("search") || message.includes("product")) {
          return formatStepsResponse(
            faqs.flipkart["search product"].steps,
            "Here's how to search for a product on Flipkart:",
            faqs.flipkart.video
          );
        }
        return "I can help with Flipkart features like:\n- Searching for products\n- Placing orders\nWhat would you like to know?";
      }
  
      if (message.includes("swiggy")) {
        if (message.includes("order") || message.includes("food")) {
          return formatStepsResponse(
            faqs.swiggy["order food"].steps,
            "Here's how to order food on Swiggy:",
            faqs.swiggy.video
          );
        }
        if (message.includes("track")) {
          return formatStepsResponse(
            faqs.swiggy["track order"].steps,
            "Here's how to track your order on Swiggy:",
            faqs.swiggy.video
          );
        }
        return "I can help with Swiggy features like:\n- Ordering food\n- Tracking your order\nWhat would you like to know?";
      }
  
      if (message.includes("ola")) {
        if (message.includes("book") || message.includes("ride")) {
          return formatStepsResponse(
            faqs.ola["book ride"].steps,
            "Here's how to book a ride on Ola: ",
            faqs.ola.video
          );
        }
        if (message.includes("cancel")) {
          return formatStepsResponse(
            faqs.ola["cancel ride"].steps,
            "Here's how to cancel a ride on Ola:",
            faqs.ola.video
          );
        }
        return "I can help with Ola features like:\n- Booking a ride\n- Canceling a ride\nWhat would you like to know?";
      }
  
      if (message.includes("uber")) {
        if (message.includes("book") || message.includes("ride")) {
          return formatStepsResponse(
            faqs.uber["book ride"].steps,
            "Here's how to book a ride on Uber:",
            faqs.uber.video
          );
        }
        if (message.includes("track") || message.includes("status")) {
          return formatStepsResponse(
            faqs.uber["track ride"].steps,
            "Here's how to track your ride on Uber:",
            faqs.uber.video
          );
        }
        return "I can help with Uber features like:\n- Booking a ride\n- Tracking your ride\nWhat would you like to know?";
      }
  
      if (message.includes("myntra")) {
        if (message.includes("search") || message.includes("product")) {
          return formatStepsResponse(
            faqs.myntra["search product"].steps,
            "Here's how to search for a product on Myntra:",
            faqs.myntra.video
          );
        }
        if (message.includes("order") || message.includes("place")) {
          return formatStepsResponse(
            faqs.myntra["place order"].steps,
            "Here's how to place an order on Myntra:",
            faqs.myntra.video
          );
        }
        return "I can help with Myntra features like:\n- Searching for products\n- Placing orders\nWhat would you like to know?";
      }
  
      if (message.includes("airbnb")) {
        if (message.includes("search") || message.includes("accommodation")) {
          return formatStepsResponse(
            faqs.airbnb["search accommodation"].steps,
            "Here's how to search for accommodation on Airbnb:",
            faqs.airbnb.video
          );
        }
        if (message.includes("book") || message.includes("reservation")) {
          return formatStepsResponse(
            faqs.airbnb["book accommodation"].steps,
            "Here's how to book accommodation on Airbnb:",
            faqs.airbnb.video
          );
        }
        return "I can help with Airbnb features like:\n- Searching for accommodation\n- Booking a reservation\nWhat would you like to know?";
      }
  
      if (message.includes("zomato")) {
        if (message.includes("order") || message.includes("food")) {
          return formatStepsResponse(
            faqs.zomato["order food"].steps,
            "Here's how to order food on Zomato:",
            faqs.zomato.video
          );
        }
        if (message.includes("rate") || message.includes("review")) {
          return formatStepsResponse(
            faqs.zomato["rate restaurant"].steps,
            "Here's how to rate a restaurant on Zomato:",
            faqs.zomato.video
          );
        }
        return "I can help with Zomato features like:\n- Ordering food\n- Rating restaurants\nWhat would you like to know?";
      }
  
      if (message.includes("bookmyshow")) {
        if (message.includes("book") || message.includes("movie")) {
          return formatStepsResponse(
            faqs.bookmyshow["book movie tickets"].steps,
            "Here's how to book movie tickets on BookMyShow:",
            faqs.bookmyshow.video
          );
        }
        if (message.includes("cancel") || message.includes("booking")) {
          return formatStepsResponse(
            faqs.bookmyshow["cancel booking"].steps,
            "Here's how to cancel a booking on BookMyShow:",
            faqs.bookmyshow.video
          );
        }
        return "I can help with BookMyShow features like:\n- Booking movie tickets\n- Cancelling bookings\nWhat would you like to know?";
      }
  
      if (message.includes("linkedin")) {
        if (message.includes("profile") || message.includes("create")) {
          return formatStepsResponse(
            faqs.linkedin["create profile"].steps,
            "Here's how to create a profile on LinkedIn:",
            faqs.linkedin.video
          );
        }
        if (message.includes("connection") || message.includes("request")) {
          return formatStepsResponse(
            faqs.linkedin["send connection request"].steps,
            "Here's how to send a connection request on LinkedIn:",
            faqs.linkedin.video
          );
        }
        return "I can help with LinkedIn features like:\n- Creating a profile\n- Sending connection requests\nWhat would you like to know?";
      }
  
      if (message.includes("snapdeal")) {
        if (message.includes("search") || message.includes("product")) {
          return formatStepsResponse(
            faqs.snapdeal["search product"].steps,
            "Here's how to search for a product on Snapdeal:",
            faqs.snapdeal.video
          );
        }
        if (message.includes("order") || message.includes("place")) {
          return formatStepsResponse(
            faqs.snapdeal["place order"].steps,
            "Here's how to place an order on Snapdeal:",
            faqs.snapdeal.video
          );
        }
        return "I can help with Snapdeal features like:\n- Searching for products\n- Placing orders\nWhat would you like to know?";
      }
  
      // Instagram responses
      if (message.includes("instagram")) {
        if (
          message.includes("post") ||
          message.includes("photo") ||
          message.includes("picture")
        ) {
          return formatStepsResponse(
            faqs.instagram["post photo"].steps,
            "Here's how to post a photo on Instagram:",
            faqs.instagram.video
          );
        }
        if (message.includes("reel") || message.includes("video")) {
          return formatStepsResponse(
            faqs.instagram["reel upload"].steps,
            "Here's how to upload a reel on Instagram:",
            faqs.instagram.video
          );
        }
        return "I can help with Instagram features like:\n- Posting photos\n- Uploading reels\nWhat would you like to know?";
      }
  
      // YouTube responses
      if (message.includes("youtube")) {
        if (message.includes("search") || message.includes("video")) {
          return formatStepsResponse(
            faqs.youtube["search video"].steps,
            "Here's how to search for videos on YouTube:",
            faqs.youtube.video
          );
        }
        if (message.includes("subscribe") || message.includes("channel")) {
          return formatStepsResponse(
            faqs.youtube["subscribe channel"].steps,
            "Here's how to subscribe to a YouTube channel:",
            faqs.youtube.video
          );
        }
        if (message.includes("upload") || message.includes("video")) {
          return formatStepsResponse(
            faqs.youtube["upload video"].steps,
            "Here's how to upload a video to YouTube:",
            faqs.youtube.video
          );
        }
        return "I can help with YouTube features like:\n- Searching videos\n- Subscribing to channels\n- Uploading videos\nWhat would you like to know?";
      }
  
      // Facebook responses
      if (message.includes("facebook")) {
        if (message.includes("post") || message.includes("create")) {
          return formatStepsResponse(
            faqs.facebook["create post"].steps,
            "Here's how to create a post on Facebook:",
            faqs.facebook.video
          );
        }
        if (message.includes("friend") || message.includes("add")) {
          return formatStepsResponse(
            faqs.facebook["add friend"].steps,
            "Here's how to add a friend on Facebook:",
            faqs.facebook.video
          );
        }
        return "I can help with Facebook features like:\n- Creating posts\n- Adding friends\nWhat would you like to know?";
      }
  
      // Twitter responses
      if (message.includes("twitter")) {
        if (message.includes("tweet") || message.includes("post")) {
          return formatStepsResponse(
            faqs.twitter["tweet"].steps,
            "Here's how to post a tweet on Twitter:",
            faqs.twitter.video
          );
        }
        if (message.includes("follow") || message.includes("user")) {
          return formatStepsResponse(
            faqs.twitter["follow user"].steps,
            "Here's how to follow someone on Twitter:",
            faqs.twitter.video
          );
        }
        return "I can help with Twitter features like:\n- Posting tweets\n- Following users\nWhat would you like to know?";
      }
  
      // Snapchat responses
      if (message.includes("snapchat")) {
        if (message.includes("snap") || message.includes("send")) {
          return formatStepsResponse(
            faqs.snapchat["send snap"].steps,
            "Here's how to send a snap on Snapchat:",
            faqs.snapchat.video
          );
        }
        if (message.includes("friend") || message.includes("add")) {
          return formatStepsResponse(
            faqs.snapchat["add friend"].steps,
            "Here's how to add a friend on Snapchat:",
            faqs.snapchat.video
          );
        }
        return "I can help with Snapchat features like:\n- Sending snaps\n- Adding friends\nWhat would you like to know?";
      }
  
      // Zoom responses
      if (message.includes("zoom")) {
        if (message.includes("join") || message.includes("meeting")) {
          return formatStepsResponse(
            faqs.zoom["join meeting"].steps,
            "Here's how to join a Zoom meeting:",
            faqs.zoom.video
          );
        }
        if (message.includes("schedule") || message.includes("meeting")) {
          return formatStepsResponse(
            faqs.zoom["schedule meeting"].steps,
            "Here's how to schedule a Zoom meeting:",
            faqs.zoom.video
          );
        }
        return "I can help with Zoom features like:\n- Joining meetings\n- Scheduling meetings\nWhat would you like to know?";
      }
  
      // Skype responses
      if (message.includes("skype")) {
        if (message.includes("call") || message.includes("make")) {
          return formatStepsResponse(
            faqs.skype["make call"].steps,
            "Here's how to make a call on Skype:",
            faqs.skype.video
          );
        }
        if (message.includes("message") || message.includes("send")) {
          return formatStepsResponse(
            faqs.skype["send message"].steps,
            "Here's how to send a message on Skype:",
            faqs.skype.video
          );
        }
        return "I can help with Skype features like:\n- Making calls\n- Sending messages\nWhat would you like to know?";
      }
  
      // Telegram responses
      if (message.includes("telegram")) {
        if (message.includes("chat") || message.includes("start")) {
          return formatStepsResponse(
            faqs.telegram["start chat"].steps,
            "Here's how to start a chat on Telegram:",
            faqs.telegram.video
          );
        }
        if (message.includes("channel") || message.includes("create")) {
          return formatStepsResponse(
            faqs.telegram["create channel"].steps,
            "Here's how to create a channel on Telegram:",
            faqs.telegram.video
          );
        }
        return "I can help with Telegram features like:\n- Starting chats\n- Creating channels\nWhat would you like to know?";
      }
  
      // Spotify responses
      if (message.includes("spotify")) {
        if (message.includes("play") || message.includes("song")) {
          return formatStepsResponse(
            faqs.spotify["play song"].steps,
            "Here's how to play a song on Spotify:",
            faqs.spotify.video
          );
        }
        if (message.includes("playlist") || message.includes("create")) {
          return formatStepsResponse(
            faqs.spotify["create playlist"].steps,
            "Here's how to create a playlist on Spotify:",
            faqs.spotify.video
          );
        }
        return "I can help with Spotify features like:\n- Playing songs\n- Creating playlists\nWhat would you like to know?";
      }
  
      // Netflix responses
      if (message.includes("netflix")) {
        if (message.includes("watch") || message.includes("show")) {
          return formatStepsResponse(
            faqs.netflix["watch show"].steps,
            "Here's how to watch a show on Netflix:",
            faqs.netflix.video
          );
        }
        if (message.includes("download") || message.includes("episode")) {
          return formatStepsResponse(
            faqs.netflix["download episode"].steps,
            "Here's how to download an episode on Netflix:",
            faqs.netflix.video
          );
        }
        return "I can help with Netflix features like:\n- Watching shows\n- Downloading episodes\nWhat would you like to know?";
      }
  
      // Amazon responses
      if (message.includes("amazon")) {
        if (message.includes("order") || message.includes("place")) {
          return formatStepsResponse(
            faqs.amazon["place order"].steps,
            "Here's how to place an order on Amazon:",
            faqs.amazon.video
          );
        }
        if (message.includes("track") || message.includes("package")) {
          return formatStepsResponse(
            faqs.amazon["track package"].steps,
            "Here's how to track a package on Amazon:",
            faqs.amazon.video
          );
        }
        return "I can help with Amazon features like:\n- Placing orders\n- Tracking packages\nWhat would you like to know?";
      }
  
      // Flipkart responses
      if (message.includes("flipkart")) {
        if (message.includes("search") || message.includes("product")) {
          return formatStepsResponse(
            faqs.flipkart["search product"].steps,
            "Here's how to search for a product on Flipkart:",
            faqs.flipkart.video
          );
        }
        if (message.includes("order") || message.includes("place")) {
          return formatStepsResponse(
            faqs.flipkart["place order"].steps,
            "Here's how to place an order on Flipkart:",
            faqs.flipkart.video
          );
        }
        return "I can help with Flipkart features like:\n- Searching products\n- Placing orders\nWhat would you like to know?";
      }
  
      // Default response if no matches found
      return "I can help with various apps like WhatsApp, Paytm, Google Maps, and more. Please ask about a specific feature!";
  };

  const sendMessage = () => {
    const message = inputValue.trim();
    if (!message) return;

    // Add user message
    setMessages(prev => [...prev, { text: message, sender: 'user' }]);
    setInputValue('');

    // Simulate bot response after a delay
    setTimeout(() => {
      const response = getBotResponse(message);
      setMessages(prev => [...prev, { text: response, sender: 'bot' }]);
    }, 500);
  };

  const handleQuickQuestion = (question) => {
    setInputValue(question);
    // Auto-send the quick question
    setTimeout(() => {
      const sendBtn = document.getElementById("send-btn");
      if (sendBtn) sendBtn.click();
    }, 100);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="ai-chat">
      <h2 className="section-title">DigiBuddy - Your AI Chat Assistant</h2>
      <p>This will be powered using ChatGPT API or Dialogflow.</p>
      <div className="chat-placeholder">
        <div className="chatbot-container" id="chatbot">
          <div className="chatbot-header">
            <span>Digital Literacy Assistant</span>
            <span>🤖</span>
          </div>

          <div className="quick-replies" id="quick-replies">
            {quickQuestions.map((question, index) => (
              <div 
                key={index} 
                className="quick-reply"
                onClick={() => handleQuickQuestion(question)}
              >
                {question}
              </div>
            ))}
          </div>

          <div className="chatbot-messages" id="chat-messages" ref={chatMessagesRef}>
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`message ${message.sender}-message`}
                dangerouslySetInnerHTML={{ __html: message.text }}
              />
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input-container">
            <div className="chatbot-input">
              <input
                type="text"
                id="user-input"
                placeholder="Ask me anything about digital tools..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                autoFocus
              />
              <button id="send-btn" onClick={sendMessage}>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChat;