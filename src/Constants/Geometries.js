import * as THREE from "three";
import { GROUND_SCALE, ROAD_LENGTH } from "./renderRelated";

// box geometries
export const BOX_GEOMETRY_1_1_1 = new THREE.BoxGeometry(1, 1, 1);

// plane geomtries
export const PLANE_GEOMETRY_1_1 = new THREE.PlaneGeometry(1, 1);
export const PLANE_GEOMETRY_ROAD_1_1 = new THREE.PlaneGeometry(ROAD_LENGTH, 1);
