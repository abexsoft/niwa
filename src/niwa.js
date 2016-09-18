module.exports = {
    //    version :           require('../package.json').version,
    THREE :             require('../libs/three.js/build/three'),
    CANNON :            require('../libs/cannon.js/build/cannon'),
    World :             require('./world/world'),
    LocalApplication :  require('./application/local_application'),
    OrbitControls :     require('./user_interface/controls/orbit_controls'),
    SphereActor :       require('./actors/sphere/sphere_actor'),
    SphereActorView :   require('./actors/sphere/sphere_actor_view'),
    SphereActorParams : require('./actors/sphere/sphere_actor_params'),
    BoxActor :          require('./actors/box/box_actor'),
    BoxActorView :      require('./actors/box/box_actor_view'),
    BoxActorParams :    require('./actors/box/box_actor_params'),    
    Vector3D :          require('./math/vector3d'),
    Quaternion :        require('./math/quaternion'),    
}
