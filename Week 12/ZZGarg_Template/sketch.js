var img;
var theta = 0;
var r = 100;

var emails;

function preload() {
  img = loadImage("https://" + "eoimages.gsfc.nasa.gov/images/imagerecords/79000/79765/dnb_land_ocean_ice.2012.3600x1800.jpg");
  emails = loadTable("https://" + "earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv","csv","header");
}

function setup() {
  createCanvas(600, 600, WEBGL);
  //latlong = []
}

function draw() {
  background(0);

  //push();
  rotateX(.25);
  rotateY(theta);
  
 texture(img);
  ellipsoid(r, r, r);
  

  //get table data
  //ONLY LOOPING TO i = 1000 FOR THIS EXAMPLE
  for (i = 0; i <= 1000; i++) {
    latlong = createVector(float(emails.getRow(i).get("latitude")),float(emails.getRow(i).get("longitude")));
    emailcount = emails.getRow(i).get("mag");

    //convert lat/long to radians
    var lat = radians(latlong.x)
    var lon = radians(latlong.y)

    //offset altitude by 1/2 emailcount
    var alt = (r + emailcount) / 1;
    alt=r;
    push();
    
    rotateY(lon);
    rotateX(lat);
    translate(0,0,r);
    //console.log(latlong.toString());
    //console.log("ok ");
   

    // stroke(255, 0, 255);
    fill(255,250,25);
    box(10, 10, 10);
    pop();
  }

  theta += 0.01;
}

function angleBetween(v1, v2) {
  if (v1.x == 0 && v1.y == 0 && v1.z == 0) return 0.0;
  if (v2.x == 0 && v1.y == 0 && v1.z == 0) return 0.0;

  var dot = v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
  var v1mag = Math.sqrt(v1.x * v1.x + v1.y * v1.y + v1.z * v1.z);
  var v2mag = Math.sqrt(v2.x * v2.x + v2.y * v2.y + v2.z * v2.z);

  var amt = dot / (v1mag * v2mag);

  if (amt <= -1) {
    return PConstants.PI;
  } else if (amt >= 1) {
    return 0;
  }
  return Math.acos(amt);
}
