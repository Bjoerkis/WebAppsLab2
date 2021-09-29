Vue.component('exercise-list',{
    data: function() {
        return {
            hTitle: "Training for the day",
            newExercise: '',
            newName:'',
            names: [],
            greeting: '',
            exercises: []
        }
    },
    template: `
            <div>
            <h3>{{title}}</h3>
            <div class="nav-bar"></div>
            
             <form @submit.prevent="addName">
                <label for="names">name:</label>
                <br>
                <input v-model="newName" type="text" name="names" id="names">
                <button type="submit" name="addName">Submit Name</button>
            </form>
            
            <form @submit.prevent="addExercise">
              <label for="exercises">Exercises:</label>
              <br>
              <input v-model="newExercise" type="text" name="exercises" required id="exercises">
              <button type="submit" name="addButton">Add Exercise</button>

            </form>
            <ul>
              <li v-for="exercise in exercises">
                <label>
                  <input type="checkbox" name="cb1" v-model="exercise.done" checked="checked" style="height: 20px; width: 20px">
                </label>
                <span :class="{done: exercise.done }">{{exercise.title}}</span>
                <button @click="removeExercise(exercise)" type="button" name="button">Delete</button>
              </li>
            </ul>
    
            </div>
        `,
    methods:{
        addExercise(){
            this.exercises.push({
                title: this.newExercise,
                done: false
            });
            this.newExercise = '';
        },
        removeExercise(exercise){
            const exerciseIndex = this.exercises.indexOf(exercise);
            this.exercises.splice(exerciseIndex, 1);

        },
       addName(){
            // console.log('hej');
           this.greeting = this.newName + 's';
           this.names.push({
               title: this.newName + this.greeting,
               done: false
           });
           this.newName = '';
       }

    },
    computed:{
        title(){
            return this.greeting + ' ' + this.hTitle;
        }
    }
})
const app = new Vue({
    el: '#app',

})
