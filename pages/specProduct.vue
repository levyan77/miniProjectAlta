<template>
    <div>

        <div v-for="spec in specs" :key="spec.id">
            
            <div class="img">
                <v-img :src="spec.img" />
            </div>
            <div>
                <h1>Operating System</h1>
                {{spec.Operating_System}}
            </div>

            <div>
                <h1>Processor</h1>
                {{spec.Processor}}
            </div>
            
            <div>
                <h1>Graphics</h1>
                {{spec.Graphics}}
            </div>

            <div>
                <h1>Display</h1>
                {{spec.Display}}
            </div>
            <div>
                <h1>Memory</h1>
                {{spec.Memory}}
            </div>
            <div>
                <h1>Storage</h1>
                {{spec.Storage}}
            </div>
            <div>
                <h1>I/O Ports</h1>
                <div v-for="details in spec.details" :key="details.id">
                    {{details.inputOutput}}
                </div>
            </div>
            <div>
                <h1>Keyboard and Touchpad</h1>
                <div v-for="details in spec.details" :key="details.id">
                    {{details.keyboard_touchpad}}
                </div>
            </div>
            <div>
                <h1>Camera</h1>
                {{spec.Camera}}
            </div>
            <div>
                <h1>Audio</h1>
                <div v-for="details in spec.details" :key="details.id">
                    {{details.audio}}
                </div>
            </div>
            <div>
                <h1>Network_and_Communication</h1>
                {{spec.Network_and_Communication}}
            </div>
            <div>
                <h1>Battery</h1>
                {{spec.Battery}}
            </div>
            <div>
                <h1>Power_Supply</h1>
                {{spec.Power_Supply}}
            </div>
            <div>
                <h1>Weight</h1>
                {{spec.Weight}}
            </div>
            <div>
                <h1>Dimension</h1>
                {{spec.Dimension}}
            </div>
            <div>
                <h1>Microsoft_Office</h1>
                {{spec.Microsoft_Office}}
            </div>
            <div>
                <h1>Security</h1>
                {{spec.Security}}
            </div>
                <div>
                <h1>Included in the Box</h1>
                <div v-for="details in spec.details" :key="details.id">
                    {{details.in_box}}
                </div>
            </div>
                <div>
                <h1>Note</h1>
                {{spec.Note}}

            </div>
        </div>
    </div>
</template>

<script>
// import gql from 'graphql-tag'
import specsQuery from '../queries/specData.gql'


export default {
    apollo: {
        specs: {
            query: specsQuery,
            update(data){
                return data.Spesifikasi
            }
            
        }
    }
    ,
    setup() {
        
    },
}
</script>

<style scoped>
    .img{
        padding-left: 300px;
        max-width: 500px;
    }
</style>