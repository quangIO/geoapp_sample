<template>
  <div class="home">
    <vs-sidebar :vs-active.sync="sidebarActive" :vs-reduce="true">
      <vs-sidebar-item @click="active=1" :vs-active="active===1" vs-icon="question_answer">
        Dashboard
      </vs-sidebar-item>
    </vs-sidebar>
    <div class="right-sidebar">
      <vs-row>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center">
          <vs-card>
            <vs-card-body>
              <h1 class="center">Ha Noi</h1>
              <p>
                <vs-row vs-type="flex" vs-justify="space-around" vs-align="center" vs-w="12">
                  <vs-col class="center" vs-w="3">
                    <small>ONGOING</small>
                    <h1>17</h1>
                  </vs-col>
                  <vs-col class="center" vs-w="3">
                    <small>AWAITING</small>
                    <h1>9</h1>
                  </vs-col>
                  <vs-col class="center" vs-w="3">
                    <small>WARNING</small>
                    <h1>3</h1>
                  </vs-col>
                  <vs-col class="center" vs-w="3">
                    <small>ERROR</small>
                    <h1>1</h1>
                  </vs-col>
                </vs-row>
              </p>
              <vs-divider></vs-divider>
              <h4>Events</h4>
              <div style="overflow-y: scroll; max-height: 75vh;">
                <vs-row vs-type="flex" vs-align="center" v-for="i,key in 80">
                  <event-item :event="{type: eventTypes[Math.floor((Math.random() * 3))]}"></event-item>
                </vs-row>
              </div>
            </vs-card-body>
          </vs-card>
        </vs-col>
      </vs-row>
    </div>
    <mgl-map :accessToken="$MAPBOX_ACCESS_TOKEN" :mapStyle.sync="mapStyle" :center="[105.8515082, 21.023]" :zoom="14">
      <mgl-navigation-control position="bottom-left"/>
      <mgl-geojson-layer type="line" sourceId="points" layerId="routex" :source.sync="routeGeojson"
                         :paint="{'line-color': '#888', 'line-width': 8}"
      ></mgl-geojson-layer>

      <mgl-marker :coordinates="coordinates">
        <template slot="marker"><g-marker></g-marker></template>
      </mgl-marker>

      <mgl-marker :coordinates="[105.810817, 21.028511]">
        <template slot="marker"><g-marker type="pin"></g-marker></template>
      </mgl-marker>
      <mgl-marker :coordinates="[105.8631377, 21.0130019]">
        <template slot="marker"><g-marker type="pin"></g-marker></template>
      </mgl-marker>
      <mgl-marker v-for="p in pins" :key="p[0]" :coordinates="p">
        <template slot="marker"><g-marker type="pin"></g-marker></template>
      </mgl-marker>
    </mgl-map>
  </div>
</template>

<script>
// @ is an alias to /src

import HelloWorld from "@/components/HelloWorld.vue";
import {
  MglMap,
  MglNavigationControl,
  MglGeojsonLayer,
  MglMarker
} from "vue-mapbox";
import GMarker from "../components/Marker";
import EventItem from "../components/EventItem";

export default {
  name: "home",
  components: {
    EventItem,
    GMarker,
    HelloWorld,
    MglMap,
    MglMarker,
    MglNavigationControl,
    MglGeojsonLayer
  },
  data() {
    return {
      active: 1,
      sidebarActive: false,
      mapStyle: "mapbox://styles/mapbox/light-v9",
      eventTypes: ["PICK_UP", "DONE", "NEW_ORDER"],
      pins: [],
      routeGeojson: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {
              name: "Vietnamese Women's Museum to UP Coworking Space"
            },
            geometry: {
              type: "LineString",
              coordinates: [
                [105.8515082, 21.0230304],
                [105.85085, 21.02322],
                [105.8508508, 21.0232229],
                [105.85028, 21.02156],
                [105.8502781, 21.0215642],
                [105.85221, 21.02099],
                [105.85243, 21.02093],
                [105.85297, 21.02075],
                [105.85314, 21.0207],
                [105.85371, 21.02053],
                [105.85428, 21.02037],
                [105.85525, 21.0201],
                [105.85558, 21.02],
                [105.85696, 21.01959],
                [105.85829, 21.0192],
                [105.85856, 21.01911],
                [105.85876, 21.01906],
                [105.85954, 21.01883],
                [105.86025, 21.0186],
                [105.86092, 21.01843],
                [105.861, 21.01842],
                [105.86112, 21.01842],
                [105.86127, 21.01843],
                [105.86155, 21.01848],
                [105.86182, 21.01853],
                [105.861821, 21.0185272],
                [105.86241, 21.01594],
                [105.86244, 21.01583],
                [105.86266, 21.01475],
                [105.8628, 21.01409],
                [105.86292, 21.01366],
                [105.86296, 21.01348],
                [105.86299, 21.0133],
                [105.8629916, 21.0133021],
                [105.863, 21.01318],
                [105.863, 21.01302],
                [105.86301, 21.01294],
                [105.863008, 21.0129372],
                [105.86314, 21.013],
                [105.8631377, 21.0130019]
              ]
            }
          },
          {
            type: "Feature",
            properties: {
              name: "Vietnamese Women's Museum",
              desc:
                "Vietnamese Women's Museum, 36 Lý Thường Kiệt, Hàng Bài, Hoàn Kiếm, Hà Nội, Vietnam"
            },
            geometry: {
              type: "Point",
              coordinates: [105.85156, 21.0231845]
            }
          },
          {
            type: "Feature",
            properties: {
              name: "UP Coworking Space",
              desc:
                "UP Coworking Space, Tầng 8, tòa nhà Hanoi Creative City, 1 Lương Yên, Bạch Đằng, Hai Bà Trưng, Hà Nội 100000, Vietnam"
            },
            geometry: {
              type: "Point",
              coordinates: [105.8631876, 21.0129148]
            }
          }
        ]
      },
      coordinates: [105.804817, 21.028511]
    };
  },
  mounted() {
    let cnt = 0;
    setInterval(() => {
      cnt++;
      this.coordinates = this.routeGeojson.features[0].geometry.coordinates[
        cnt
      ];
    }, 1000);
    setInterval(() => {
      this.pins.push([
        105.8447573 + Math.random() * 0.01,
        21.02324 + Math.random() * 0.01
      ]);
    }, 5300);
  }
};
</script>

<style>
.right-sidebar {
  background-color: white;
  width: 400px;
  position: absolute;
  right: 0;
  top: 0;
}
</style>
