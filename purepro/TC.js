function setTitle(title = "") {
    if (title) {
      document.title = title;
    } else {
      document.title = settingsDefaultTab.title;
    }
  
    // Update the saved tab data with the new title
    var tab = localStorage.getItem("tab");
  
    if (tab) {
      // If there is saved data, try to parse it
      try {
        var tabData = JSON.parse(tab);
      } catch {
        // If there is an error in parsing, create an empty object
        var tabData = {};
      }
    } else {
      // If there is no saved data, create an empty object
      var tabData = {};
    }
  
    if (title) {
      // If there is a new title, update tabData
      tabData.title = title;
    } else {
      // If the title is empty, delete the title field from tabData
      delete tabData.title;
    }
  
    // Save the updated tab data to localStorage
    localStorage.setItem("tab", JSON.stringify(tabData));
  }
  
  // Function to set the favicon
  function setFavicon(icon) {
    if (icon) {
      document.querySelector("link[rel='icon']").href = icon;
    } else {
      document.querySelector("link[rel='icon']").href = settingsDefaultTab.icon;
    }
  
    // Update the saved tab data with the new icon
    var tab = localStorage.getItem("tab");
  
    if (tab) {
      // If there is saved data, try to parse it
      try {
        var tabData = JSON.parse(tab);
      } catch {
        // If there is an error in parsing, create an empty object
        var tabData = {};
      }
    } else {
      // If there is no saved data, create an empty object
      var tabData = {};
    }
  
    if (icon) {
      // If there is a new icon, update tabData
      tabData.icon = icon;
    } else {
      // If the icon is empty, delete the icon field from tabData
      delete tabData.icon;
    }
  
    // Save the updated tab data to localStorage
    localStorage.setItem("tab", JSON.stringify(tabData));
  }
  
  function setCloak() { // applies only to premade cloaks
    var cloak = document.getElementById("premadecloaks").value; // cloak seems kind of weird when you spell it out
    switch (cloak) {
      case "search": // Google Search
        setTitle("Google");
        setFavicon("./images/cloaks/Google Search.ico");
        location.reload();
        break;
      case "drive": // Google Drive
        setTitle("My Drive - Google Drive");
        setFavicon("./images/cloaks/Google Drive.ico");
        location.reload();
        break;
      case "youtube": // YouTube 
        setTitle("YouTube");
        setFavicon("./images/cloaks/Youtube.ico");
        location.reload();
        break;  
      case "gmail": // Gmail
        setTitle("Gmail");
        setFavicon("./images/cloaks/Gmail.ico");
        location.reload();
        break;
      case "calendar": // Google Calendar
        setTitle("Google Calendar");
        setFavicon("./images/cloaks/Calendar.ico");
        location.reload();
        break;
      case "meets": // Google Meet
        setTitle("Google Meet");
        setFavicon("./images/cloaks/Meet.ico");
        location.reload();
        break;
      case "classroom": // Google Classroom
        setTitle("Classes");
        setFavicon("./images/cloaks/Classroom.png");
        location.reload();
        break;
      case "canvas": // Canvas 
        setTitle("Canvas");
        setFavicon("./images/cloaks/Canvas.ico");
        location.reload();
        break;
      case "zoom": // Zoom
        setTitle("Zoom");
        setFavicon("./images/cloaks/Zoom.ico");
        location.reload();
        break;
      case "khan": // Khan Academy
        setTitle("Dashboard | Khan Academy"); 
        setFavicon("./images/cloaks/Khan Academy.ico");
        location.reload();
        break;
    }
  }
  
  // Function to reset the tab settings to default
  function resetTab() {
    document.title = settingsDefaultTab.title;
    document.querySelector("link[rel='icon']").href = settingsDefaultTab.icon;
    document.getElementById("title").value = "";
    document.getElementById("icon").value = "";
    localStorage.setItem("tab", JSON.stringify({}));
  }
  