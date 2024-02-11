if (tabData.title) {
    document.title = tabData.title;
  }
  
  // Set the Tab icon if the Tab cloak data is there
  if (tabData.icon) {
    document.querySelector('link[rel="icon"]').href = tabData.icon;
  }
  