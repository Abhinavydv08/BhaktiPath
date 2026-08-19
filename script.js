const shloks = [
  "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। (गीता 2.47)\n— तुझे केवल कर्म करने का अधिकार है, फलों में नहीं।",
  "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनंजय। (गीता 2.48)\n— योग में स्थित होकर कर्म कर, आसक्ति को त्याग दे।",
  "मनुष्य अपने विश्वास से बनता है। जैसा वह विश्वास करता है, वैसा ही वह बन जाता है। — भगवद्गीता",
  "जो हुआ अच्छे के लिए हुआ, जो हो रहा है वह भी अच्छे के लिए हो रहा है, जो होगा वह भी अच्छे के लिए ही होगा। — श्रीकृष्ण"
];

function generateShlok() {
  const random = Math.floor(Math.random() * shloks.length);
  const shlokDisplay = document.getElementById("dailyShlok");
  
  shlokDisplay.style.opacity = 0;
  setTimeout(() => {
    shlokDisplay.innerText = shloks[random];
    shlokDisplay.style.opacity = 1;
  }, 400);
}

window.onload = generateShlok;