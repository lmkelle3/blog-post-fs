exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("posts")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("posts").insert([
        {
          author: {
            first: "Watson",
            last: "Peterson"
          },
          content:
            "Sunt exercitation consectetur proident amet aliquip sint sit veniam sit culpa laboris proident dolor nostrud. Velit magna laboris cupidatat laboris cupidatat. Cillum voluptate veniam qui eu id anim ad mollit ullamco enim excepteur. Pariatur dolor elit minim qui magna proident elit ut labore magna sit eu. Esse nisi fugiat aute irure minim excepteur.",
          title:
            "Sunt ad minim esse et tempor proident aliqua quis proident nostrud amet in ex velit. Proident consequat magna velit elit do esse sint ullamco consectetur tempor eiusmod. Duis duis ad incididunt ea nisi elit.",
          createdAt:
            "function(b,c,d){b=b||new Date(1970,0,1),c=c||new Date;var e=new Date(b.getTime()+Math.random()*(c.getTime()-b.getTime()));return d?a(d,e):e}",
          votes: 248,
          img_url: "http://placehold.it/32x32"
        },
        {
          author: {
            first: "Tamara",
            last: "Hewitt"
          },
          content:
            "Ullamco dolore consectetur est in. Ut nostrud aliquip non Lorem ea. Magna esse quis enim incididunt deserunt cupidatat mollit ut nulla veniam non. Sunt tempor adipisicing exercitation cupidatat fugiat velit enim voluptate velit. Tempor enim labore et adipisicing.",
          title:
            "Minim et minim ut cillum non. Laboris esse duis aliquip aute mollit culpa aliqua. Consectetur aute anim magna eiusmod culpa ullamco consequat ipsum.",
          createdAt:
            "function(b,c,d){b=b||new Date(1970,0,1),c=c||new Date;var e=new Date(b.getTime()+Math.random()*(c.getTime()-b.getTime()));return d?a(d,e):e}",
          votes: 223,
          img_url: "http://placehold.it/32x32"
        },
        {
          author: {
            first: "Drake",
            last: "Vaughn"
          },
          content:
            "Ut duis mollit labore est esse sint in dolore voluptate. Esse excepteur anim ipsum esse sint dolore tempor nulla ullamco sint aliquip enim. Officia consectetur voluptate consequat adipisicing culpa ex dolor culpa qui proident ex. Ut elit labore mollit non exercitation ex nisi deserunt. Minim ullamco cupidatat non amet est mollit voluptate enim cillum.",
          title:
            "Mollit sit ad nisi qui incididunt elit voluptate aute culpa. Laborum est nulla elit excepteur minim duis Lorem ad do culpa irure duis non. Et qui dolor magna laboris sint occaecat.",
          createdAt:
            "function(b,c,d){b=b||new Date(1970,0,1),c=c||new Date;var e=new Date(b.getTime()+Math.random()*(c.getTime()-b.getTime()));return d?a(d,e):e}",
          votes: 298,
          img_url: "http://placehold.it/32x32"
        },
        {
          author: {
            first: "Allyson",
            last: "Benjamin"
          },
          content:
            "Aliquip duis sint consectetur ullamco dolore laborum elit culpa ad velit commodo ullamco deserunt. Esse reprehenderit magna veniam sunt mollit anim officia adipisicing aliquip amet pariatur proident sunt sint. Ipsum exercitation magna quis incididunt cillum officia ad laborum incididunt labore laboris amet exercitation commodo. Ex deserunt enim mollit non Lorem ipsum est elit reprehenderit ex Lorem cillum do consequat. Ut dolore minim exercitation amet elit duis labore duis mollit esse.",
          title:
            "Cupidatat fugiat fugiat cillum proident velit voluptate est enim incididunt et quis exercitation. Mollit laborum exercitation proident deserunt occaecat ad mollit nostrud veniam ex. Officia ut sint elit quis et amet cillum cupidatat dolor exercitation irure.",
          createdAt:
            "function(b,c,d){b=b||new Date(1970,0,1),c=c||new Date;var e=new Date(b.getTime()+Math.random()*(c.getTime()-b.getTime()));return d?a(d,e):e}",
          votes: 53,
          img_url: "http://placehold.it/32x32"
        }
      ]);
    });
};
