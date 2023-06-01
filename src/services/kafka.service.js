class KafkaService {
   url = 'https://kafka-express-service-sagnnax.cloud.okteto.net/';

   reactionPush = async (data) => {
      await fetch(this.url + 'reaction?userId=' + data.userId + '&objectId=' + data.objectId + '&reactionId=' + data.reactionId, {
         method: 'GET',
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
      })
         .then((response) => console.log(response.json()))
         .then((data) => {
            console.log(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }

   commentPush = async (data) => {
      await fetch(this.url + 'comments?userId=' + data.userId + '&objectId=' + data.objectId + '&comment=' + data.comment, {
         method: 'GET',
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
      })
         .then((response) => console.log(response.json()))
         .then((data) => {
            console.log(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }

}

const KafkaServiceInstance = new KafkaService();
export default KafkaServiceInstance;