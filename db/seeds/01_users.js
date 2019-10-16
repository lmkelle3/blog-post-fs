exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          name: {
            first: "Bernice",
            last: "Ingram"
          },
          phone: "(912)400-3056",
          email: "martinacrane@pheast.com",
          company: "Pyramax",
          address: "Dakota Place",
          photo_url: "http://placehold.it/32x32",
          password:
            "Ex aliquip culpa dolore exercitation velit sit voluptate anim occaecat."
        },
        {
          name: {
            first: "Potter",
            last: "Burgess"
          },
          phone: "(828)587-2162",
          email: "kinghall@inear.com",
          company: "Interfind",
          address: "Menahan Street",
          photo_url: "http://placehold.it/32x32",
          password:
            "Laboris exercitation incididunt aute minim eu voluptate elit anim."
        },
        {
          name: {
            first: "Bobbie",
            last: "Rodgers"
          },
          phone: "(890)586-2994",
          email: "miriammedina@cinesanct.com",
          company: "Geologix",
          address: "Woodside Avenue",
          photo_url: "http://placehold.it/32x32",
          password: "Qui cupidatat duis labore est Lorem exercitation fugiat."
        },
        {
          name: {
            first: "Spence",
            last: "Cote"
          },
          phone: "(820)420-2475",
          email: "kanehuff@comvoy.com",
          company: "Emtrac",
          address: "Hampton Avenue",
          photo_url: "http://placehold.it/32x32",
          password:
            "Velit do excepteur ullamco Lorem in est adipisicing velit aliqua Lorem."
        }
      ]);
    });
};
