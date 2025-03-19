"use client";

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const Character = ({animation}) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/cool_man.glb");
  const { actions } = useAnimations(animations, group);

  console.log(actions);

  useEffect(() => {
    actions[animation].reset().fadeIn(0.5).play();

    return ()=>{actions[animation].fadeOut(0.5);}
  }, [animation]);
  return (
    <group ref={group} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.966}
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Armature_178">
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials["Wolf3D_Skin.003"]}
                    skeleton={nodes.Object_7.skeleton}
                    castShadow
                    receiveShadow
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials["Wolf3D_Teeth.003"]}
                    skeleton={nodes.Object_9.skeleton}
                    castShadow
                    receiveShadow
                  />
                  <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials["Wolf3D_Body.003"]}
                    skeleton={nodes.Object_11.skeleton}
                    castShadow
                    receiveShadow
                  />
                  <skinnedMesh
                    name="Object_13"
                    geometry={nodes.Object_13.geometry}
                    material={materials["Wolf3D_Outfit_Bottom.003"]}
                    skeleton={nodes.Object_13.skeleton}
                    castShadow
                    receiveShadow
                  />
                  <skinnedMesh
                    name="Object_15"
                    geometry={nodes.Object_15.geometry}
                    material={materials["Wolf3D_Outfit_Footwear.003"]}
                    skeleton={nodes.Object_15.skeleton}
                    castShadow
                    receiveShadow
                  />
                  <skinnedMesh
                    name="Object_17"
                    geometry={nodes.Object_17.geometry}
                    material={materials["Wolf3D_Outfit_Top.003"]}
                    skeleton={nodes.Object_17.skeleton}
                    castShadow
                    receiveShadow
                  />
                  <skinnedMesh
                    name="Object_19"
                    geometry={nodes.Object_19.geometry}
                    material={materials["Wolf3D_Hair.003"]}
                    skeleton={nodes.Object_19.skeleton}
                    castShadow
                    receiveShadow
                  />
                  <skinnedMesh
                    name="Object_21"
                    geometry={nodes.Object_21.geometry}
                    material={materials["Wolf3D_Glasses.003"]}
                    skeleton={nodes.Object_21.skeleton}
                    castShadow
                    receiveShadow
                  />
                  <skinnedMesh
                    name="Object_23"
                    geometry={nodes.Object_23.geometry}
                    material={materials["Wolf3D_Eye.003"]}
                    skeleton={nodes.Object_23.skeleton}
                    castShadow
                    receiveShadow
                  />
                  <skinnedMesh
                    name="Object_25"
                    geometry={nodes.Object_25.geometry}
                    material={materials["Wolf3D_Eye.003"]}
                    skeleton={nodes.Object_25.skeleton}
                    castShadow
                    receiveShadow
                  />
                  <group name="Object_11_168" />
                  <group name="Object_13_169" />
                  <group name="Object_15_170" />
                  <group name="Object_17_171" />
                  <group name="Object_19_172" />
                  <group name="Object_21_173" />
                  <group name="Object_23_174" />
                  <group name="Object_25_175" />
                  <group name="Object_7_176" />
                  <group name="Object_9_177" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/cool_man.glb");

export default Character;
