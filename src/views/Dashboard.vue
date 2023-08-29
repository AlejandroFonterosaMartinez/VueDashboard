<template>
    <v-app>
        <v-main>
            <v-container>
                <h5 class="heads">Estadísticas</h5>
                <div class="charts">

                    <v-card class="chart-card">
                        <div class="chart">
                            <Doughnut :data="donutData" :options="donutChartOptions" />
                        </div>
                        <h4 class="text-h4">Datos</h4>
                        <v-divider></v-divider>
                        <v-subheader class="subheader">Datos de la última campaña</v-subheader>
                        <v-divider></v-divider>
                    </v-card>

                    <v-card class="chart-card">
                        <div class="chart">
                            <Doughnut :data="donutChartDataClients" :options="donutChartOptions" />
                        </div>
                        <h4 class="text-h4">Clientes</h4>
                        <v-divider></v-divider>
                        <v-subheader class="subheader">198 clientes</v-subheader>
                        <v-divider></v-divider>
                    </v-card>

                    <v-card class="chart-card">
                        <div class="chart">
                            <Doughnut :data="donutChartDataEuros" :options="donutChartOptions" />
                        </div>
                        <h4 class="text-h4">Ingresos</h4>
                        <v-divider></v-divider>
                        <v-subheader class="subheader">87.637€</v-subheader>
                        <v-divider></v-divider>
                    </v-card>
                </div>
                <h5 class="heads">Resumen</h5>
                <div class="media-container">

                    <div class="media">
                        <v-card class="media-card">
                            <div class="media-img">
                                <Icon icon="uil:chart" class="icono" />
                            </div>
                            <v-subheader class="subheader">Visitas
                                <Icon icon="mingcute:arrow-up-fill" color="red" :rotate="2" />
                            </v-subheader>
                            <h4 class="text-h4">+8.799</h4>

                        </v-card>
                    </div>
                    <div class="media">
                        <v-card class="media-card">
                            <div class="media-img">
                                <Icon icon="skill-icons:instagram" class="icono"
                                    style="background-color:rgba(207, 25, 192, 0.801)" />

                            </div>
                            <v-subheader class="subheader">Social
                                <Icon icon="mingcute:arrow-up-fill" color="green" />
                            </v-subheader>
                            <h4 class="text-h4">+632</h4>

                        </v-card>
                    </div>
                    <div class="media">
                        <v-card class="media-card">
                            <div class="media-img">
                                <Icon icon="material-symbols:work-alert-outline" class="icono"
                                    style="background-color: rgba(0, 173, 9, 0.836);" />
                            </div>
                            <v-subheader class="subheader">Tareas Pdts
                                <Icon icon="healthicons:alert" color="orange" />
                            </v-subheader>
                            <h4 class="text-h4">
                                +23
                            </h4>

                        </v-card>
                    </div>
                </div>

                <h5 class="heads">Usuarios</h5>
                <v-table>
                    <thead>
                        <tr>
                            <th class="text-center">Usuario</th>
                            <th class="text-center">Contraseña</th>
                            <th class="text-center">Rol</th>
                            <th class="text-center">Empresa</th>
                            <th class="text-center">Estatus</th>
                            <th class="text-center">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-center">Usuario 1</td>
                            <td class="text-center">**********</td>
                            <td class="text-center">Administrador</td>
                            <td class="text-center">Empresa 1</td>
                            <td class="text-center">Activo</td>
                            <td class="text-center">
                                <v-chip class="chip_btn" color="primary" text>Editar</v-chip>
                                <v-chip class="chip_btn" color="error" text>Eliminar</v-chip>
                            </td>
                        </tr>
                        <tr>
                            <td class="text-center">Usuario 2</td>
                            <td class="text-center">***************</td>
                            <td class="text-center">Usuario</td>
                            <td class="text-center">Empresa 2</td>
                            <td class="text-center">Activo</td>
                            <td class="text-center">
                                <v-chip class="chip_btn" color="primary" text>Editar</v-chip>
                                <v-chip class="chip_btn" color="error" text>Eliminar</v-chip>
                            </td>
                        </tr>
                        <tr>
                            <td class="text-center">Usuario 3</td>
                            <td class="text-center">*************</td>
                            <td class="text-center">Usuario</td>
                            <td class="text-center">Empresa 3</td>
                            <td class="text-center" id="inactivo">Inactivo</td>
                            <td class="text-center">
                                <v-chip class="chip_btn" color="primary" text>Editar</v-chip>
                                <v-chip class="chip_btn" color="error" text>Eliminar</v-chip>
                            </td>
                        </tr>
                        <tr>
                            <td class="text-center">Usuario 4</td>
                            <td class="text-center">*****</td>
                            <td class="text-center">Usuario</td>
                            <td class="text-center">Empresa 4</td>
                            <td class="text-center" id="inactivo">Inactivo</td>
                            <td class="text-center">
                                <v-chip class="chip_btn" color="primary" text>Editar</v-chip>
                                <v-chip class="chip_btn" color="error" text>Eliminar</v-chip>
                            </td>
                        </tr>
                        <tr>
                            <td class="text-center">Usuario 5</td>
                            <td class="text-center">********</td>
                            <td class="text-center">Usuario</td>
                            <td class="text-center">Empresa 5</td>
                            <td class="text-center">Activo</td>
                            <td class="text-center">
                                <v-chip class="chip_btn" color="primary" text>Editar</v-chip>
                                <v-chip class="chip_btn" color="error" text>Eliminar</v-chip>
                            </td>
                        </tr>
                    </tbody>
                </v-table>
                <v-divider style="margin-top:15px;margin-bottom:15px;"></v-divider>
                <div class="content-container">
                    <h5 class="heads">Tareas</h5>
                    <v-card class="progress-card">
                        <v-card-title class="title">Tareas Pendientes</v-card-title>
                        <v-divider></v-divider>
                        <v-card-text>
                            <div class="progress-item">
                                <div class="progress-label">Tarea 1</div>
                                <v-progress-linear class="progress-val" color="success" model-value="60"
                                    :height="10"></v-progress-linear>
                            </div>
                            <div class="progress-item">
                                <div class="progress-label">Tarea 2</div>
                                <v-progress-linear class="progress-val" color="orange" model-value="33"
                                    :height="10"></v-progress-linear>
                            </div>
                            <div class="progress-item">
                                <div class="progress-label">Tarea 3</div>
                                <v-progress-linear class="progress-val" color="success" model-value="90"
                                    :height="10"></v-progress-linear>
                            </div>
                            <div class="progress-item">
                                <div class="progress-label">Tarea 4</div>
                                <v-progress-linear class="progress-val" color="red" model-value="20"
                                    :height="10"></v-progress-linear>
                            </div>
                            <div class="progress-item">
                                <div class="progress-label">Tarea 5</div>
                                <v-progress-linear class="progress-val" color="red" model-value="10"
                                    :height="10"></v-progress-linear>
                            </div>
                            <div class="progress-item">
                                <div class="progress-label">Tarea 6</div>
                                <v-progress-linear class="progress-val" color="success" model-value="100"
                                    :height="10"></v-progress-linear>
                            </div>
                            <div class="progress-item">
                                <div class="progress-label">Tarea 7</div>
                                <v-progress-linear class="progress-val" color="orange" model-value="40"
                                    :height="10"></v-progress-linear>
                            </div>
                            <div class="progress-item">
                                <div class="progress-label">Tarea 8</div>
                                <v-progress-linear class="progress-val" color="red" model-value="1"
                                    :height="10"></v-progress-linear>
                            </div>
                        </v-card-text>
                    </v-card>
                    <h5 class="heads">Bajas</h5>
                    <v-card class="form-card">
                        <v-card-title class="title">Bajas</v-card-title>
                        <v-card-text>
                            <v-form @submit.prevent="submitForm">
                                <v-text-field label="Nombre" variant="solo-filled"></v-text-field>
                                <v-autocomplete label="Seccion"
                                    :items="['Seccion 1', 'Seccion 2', 'Seccion 3', 'Seccion 4', 'Seccion 5']"></v-autocomplete>
                                <v-row>
                                    <v-col cols="12" md="6">
                                        <v-text-field label="Incidencia" variant="filled"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-combobox multiple label="Baja"
                                            :items="['Ausencia corta', 'Ausencia media', 'Ausencia larga']"
                                            variant="filled"></v-combobox>
                                    </v-col>
                                </v-row>
                                <div class="grupo-btn">
                                    <v-btn type="button" color="primary">Enviar</v-btn>
                                    <v-btn type="reset" color="error">Cancelar</v-btn>
                                </div>
                            </v-form>
                        </v-card-text>
                    </v-card>
                </div>
            </v-container>
        </v-main>
    </v-app>
</template>
  
<script>
import { Bar, Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { Icon } from '@iconify/vue';
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement)
export default {
    name: 'EnhancedDashboard',
    components: { Bar, Doughnut, Vuetify, Icon },
    data() {
        return {

            donutData: {
                labels: ['Enero', 'Febrero', 'Marzo'],
                datasets: [
                    {

                        backgroundColor: ['#ffa43a', '#759eff', '#ff7dd8'],
                        data: [40, 20, 12]
                    }
                ]
            },
            donutChartDataClients: {
                labels: ['Client A', 'Client B', 'Client C'],
                datasets: [
                    {
                        backgroundColor: ['salmon', 'lightblue', 'lightgreen'],
                        data: [10, 25, 15]
                    }
                ]
            },
            donutChartDataEuros: {
                labels: ['Enero', 'Febrero', 'Marzo'],
                datasets: [
                    {
                        backgroundColor: ['#6aa3b4', '#eda519', '#7b6ceb'],
                        data: [1000, 1500, 1200]
                    }
                ]
            },
            barChartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            },
            donutChartOptions: {
                responsive: true,
                maintainAspectRatio: false
            }
        }
    }
}
</script>

<style>
.purple-bg {
    background-color: rgba(207, 25, 192, 0.801);
  }
.chart-card {
    width: calc(33.33% - 20px);
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px;
    text-align: center;
}


.chart-card:hover {
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
}

.charts {
    display: flex;
    justify-content: center;
    gap: 20px;

}

.media {
    position: relative;
    width: calc(23.33% - 5px);
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

}

.icono {
    font-size: 84px;
    position: absolute;
    left: 0;
    color: white;
    background-color: #3f9cf3;
    padding: 10px;
    border-radius: 1%;

}

.media-container {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.media-card {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;
}

.media-card:hover {
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
}


.text-h4 {
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 5px;
    margin-left: 25px;
}

.subheader {
    font-size: 14px;
    color: #616161;
    margin-bottom: 10px;
    margin-left: 50px;
}

.chip_btn {
    margin: 2px;
    padding: 5px;
}

.chip_btn:hover {
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: box-shadow 0.5s ease-in-out;
}

v-table {
    margin-top: 20px;
    margin-bottom: 20px;
}

#inactivo {
    color: orange;
}

.progress-card {
    margin-top: 15px;
    border-radius: 8px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
    width: 50%;
}

.title {
    font-size: 20px;
    font-weight: bold;
    padding: 16px;
}

.progress-item {
    display: flex;
    align-items: center;
    margin: 12px 0;
}

.progress-label {

    width: 60px;
    font-weight: bold;
}

.progress-val {
    margin-left: -20px;
    margin-right: 15px;
}

.content-container {
    display: flex;
    gap: 20px;
}

.form-card {
    margin-top: 15px;
    width: 50%;
    border-radius: 8px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
}

.grupo-btn {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 5px;
}

.heads {
    margin-top: 20px;
    margin-bottom: 20px;
    color: #ccc;
}
</style>
