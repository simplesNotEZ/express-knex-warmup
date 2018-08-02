
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('student').del()
    .then(function () {
      // Inserts seed entries
      return knex('student').insert([
        {
          first_name: 'Will', 
          last_name: 'Kirkhope', 
          prior_occupation: 'Personal Trainer', 
          hometown: 'San Diego'
        },
        {
          first_name: 'Tron', 
          last_name: 'Tron', 
          prior_occupation: 'Crack Pusher', 
          hometown: 'Watts'
        },
        {
          first_name: 'Weasel', 
          last_name: 'Peen', 
          prior_occupation: 'Winner', 
          hometown: 'The Streets'
        },
        {
          first_name: 'Tom', 
          last_name: 'Clukies', 
          prior_occupation: 'Fortune Teller',
          hometown: 'Imaginationland'
          },
          {
          first_name: 'Josh', 
          last_name: 'Lovely', 
          prior_occupation: 'Fortune Teller', 
          hometown: 'Imaginationland'
          },
          {
          first_name: 'R.J.', 
          last_name: 'Kirkhope', 
          prior_occupation: 'Stuntman', 
          hometown: 'San Diego'
          },
          {
          first_name: 'Mark', 
          last_name: 'Newcomb', 
          prior_occupation: 'Already was a web developer yo', 
          hometown: 'Hays, KS'
          },
          {
          first_name: 'Kim', 
          last_name: 'Hermosillo', 
          prior_occupation: 'Server', 
          hometown: 'Denver'
          },
          {
          first_name: 'Tom', 
          last_name: 'Lee', 
          prior_occupation: 'Sales Manager', 
          hometown: 'Colorado Springs'
          },
          {
          first_name:'Ben',
          last_name:'Austin',
          prior_occupation:'Social Work',
          hometown: 'Denver'
          },
          {
          first_name:'Josh',
          last_name:'Rob',
          prior_occupation:'professional alligator wrangler',
          hometown:'Poquoson'
          },
          {
          first_name:'Matt',
          last_name:'Riach',
          prior_occupation:'Map Seller',
          hometown:'Liverpool'
          },
          {
          first_name:'Michael',
          last_name:'Coons',
          prior_occupation:'Dirctor of IT',
          hometown:'Bloomington, IN'
          },
          {
          first_name:'Natile',
          last_name:'Todd',
          prior_occupation:'Recruiter',
          hometown:'Anchorage'  
          },
          {
          first_name:'Danny',
          last_name:'Pifer',
          prior_occupation:'QA Tester',
          hometown:'San Franciso'
          },
          {
          first_name:'Ryan',
          last_name:'McCrory',
          prior_occupation:'U.S.Army',
          hometown:'Denver'
          },
          {
          first_name:'Matt',
          last_name:'Huston',
          prior_occupation:'Valet',
          hometown:'Littleton, CO'
          }

      ]);
    });
};
