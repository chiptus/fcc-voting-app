export default {
  entities: {
    users: {
      /*
        ids: {
          name,
          id,
          polls: [ids],
          votes: [{id, optionId}]
        }
      */
    },
    polls: {
      /*
        ids: {
          id,
          name,
          options: [optionIds]
        }
      */
    },
    options: {
      /*
        ids: {
          id,
          name,
          value
        }
      */
    }
  },
  polls: [/*ids */],
  auth: {
    userId: '', /* id */
  }
  
}