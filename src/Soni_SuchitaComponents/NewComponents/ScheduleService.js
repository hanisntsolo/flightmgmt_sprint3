import axios from 'axios';

// const Schedule_API_BASE_URL = "http://localhost:8080/scheduledFlight";

class ScheduleService {

    getScheduledFlight(){
        return axios.get( 'http://localhost:8080/scheduledFlight/all');
    }

    getScheduledFlightById(entryNo){
        return axios.get(`http://localhost:8080/scheduledFlight/getflight/${entryNo}`);
    }

    createScheduledFlight(scheduledFlight){
        return axios.post('http://localhost:8080/scheduledFlight/newflight', scheduledFlight);
    }

    updateScheduledFlight(entryNo, scheduledFlight ){
            return axios.put(`http://localhost:8080/scheduledFlight/updateFlight/${entryNo}` , scheduledFlight);
    }

     deleteScheduledFlight(entryNo){
        return axios.delete(`http://localhost:8080/scheduledFlight/deleteflight/${entryNo}`);
    }
}

export default new ScheduleService()