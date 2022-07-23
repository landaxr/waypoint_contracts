/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import ReactFlow, {MiniMap, Controls, Background} from 'react-flow-renderer';

const MiniMapz = () => {

    const initialNodes = [
        {
          id: '1',
          type: 'input',
          data: { label: 'Space 1' },
          position: { x: 250, y: 25 },
        },
      
        {
          id: '2',
          // you can also pass a React component as a label
          data: { label: <div>Space 2</div> },
          position: { x: 100, y: 125 },
        },
        {
          id: '3',
          type: 'output',
          data: { label: 'Space 3' },
          position: { x: 250, y: 250 },
        },
      ];
      
      const initialEdges = [
        { id: 'e1-2', source: '1', target: '2', label: 'Portal #1.0' },
        { id: 'e2-3', source: '2', target: '3', animated: true, label: 'Portal# 2.0' },
      ];
      
      
      const [nodes, setNodes] = useState(initialNodes);
      const [edges, setEdges] = useState(initialEdges);
      
    return (
    
    <div style={{border: '5px red solid', height: '80vh'}}>
    <ReactFlow nodes={nodes} edges={edges} fitView >
      <MiniMap/>
      <Controls/>
      <Background/>
    </ReactFlow>
    </div>
    )

}
export default MiniMapz;