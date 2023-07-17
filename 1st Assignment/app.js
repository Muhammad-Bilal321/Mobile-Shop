var mobiles = {
  Apple: {
    iPhoneX: {
      name: "iPhoneX",
      color: "Space Gray",
      display: "5.8 inches",
      storage: "64GB",
      ram: "3GB"
    },
    iPhone11: {
      name: "iPhone11",
      color: "Black",
      display: "6.1 inches",
      storage: "128GB",
      ram: "4GB"
    },
    iPhone12: {
      name: "iPhone12",
      color: "White",
      display: "6.1 inches",
      storage: "256GB",
      ram: "6GB"
    }
  },
  Samsung: {
    GalaxyS21: {
      name: "GalaxyS21",
      color: "Phantom Gray",
      display: "6.2 inches",
      storage: "128GB",
      ram: "8GB"
    },
    GalaxyS20: {
      name: "GalaxyS20",
      color: "Cloud Blue",
      display: "6.2 inches",
      storage: "256GB",
      ram: "12GB"
    },
    GalaxyNote20: {
      name: "GalaxyNote20",
      color: "Mystic Green",
      display: "6.7 inches",
      storage: "256GB",
      ram: "8GB"
    }
  },
  OnePlus: {
    OnePlus9: {
      name: "OnePlus9",
      color: "Astral Black",
      display: "6.55 inches",
      storage: "128GB",
      ram: "8GB"
    },
    OnePlus8: {
      name: "OnePlus8",
      color: "Glacial Green",
      display: "6.55 inches",
      storage: "256GB",
      ram: "12GB"
    },
    OnePlus7T: {
      name: "OnePlus7T",
      color: "Frosted Silver",
      display: "6.55 inches",
      storage: "128GB",
      ram: "8GB"
    }
  },
  Google: {
    Pixel5: {
      name: "Pixel5",
      color: "Just Black",
      display: "6.0 inches",
      storage: "128GB",
      ram: "8GB"
    },
    Pixel4a: {
      name: "Pixel4a",
      color: "Clearly White",
      display: "5.81 inches",
      storage: "128GB",
      ram: "6GB"
    },
    Pixel3: {
      name: "Pixel3",
      color: "Not Pink",
      display: "5.5 inches",
      storage: "64GB",
      ram: "4GB"
    }
  },
  Huawei: {
    P30Pro: {
      name: "P30Pro",
      color: "Aurora",
      display: "6.47 inches",
      storage: "128GB",
      ram: "8GB"
    },
    Mate40Pro: {
      name: "Mate40Pro",
      color: "Mystic Silver",
      display: "6.76 inches",
      storage: "256GB",
      ram: "8GB"
    },
    Nova8: {
      name: "Nova8",
      color: "Midnight Black",
      display: "6.57 inches",
      storage: "128GB",
      ram: "8GB"
    }
  }
};
function clickOn(){
 
  // var brand = prompt("Enter Brand")
  // var model = prompt("Enter Model")



  var input = document.getElementById("input")
  var brand = input.value


  var input2 = document.getElementById("input2")
  var model = input2.value
 
var outputElement = document.getElementById("list");
outputElement.innerHTML = `
<p>Name: ${mobiles[brand][model].name}</p>
<p>Color: ${mobiles[brand][model].color}</p>
<p>display: ${mobiles[brand][model].display}</p>
<p>storage: ${mobiles[brand][model].storage}</p>
<p>ram: ${mobiles[brand][model].ram}</p>
<button onclick="clickOn()">Search</button>
`;


}


// var brand = prompt("Enter Brand")
// var model = prompt("Enter Model")


// var outputElement = document.getElementById("list");
// outputElement.innerHTML = `
// <p>Name: ${mobiles[brand][model].name}</p>
// <p>Color: ${mobiles[brand][model].color}</p>
// <p>display: ${mobiles[brand][model].display}</p>
// <p>storage: ${mobiles[brand][model].storage}</p>
// <p>ram: ${mobiles[brand][model].ram}</p>
// `;











