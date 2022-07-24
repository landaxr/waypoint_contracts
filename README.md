WayPoint.sol deploys an ERC-721 contract with custom functionalities for the recording or portal data, including their spacial locations, the tokenID's of their target endpoints, and the spacial locations of its exit point in that other token.

This allows users to mint their own spaces and determine their own relationships with other spaces by deploying portals how they see fit.

Look at our subgraph playground here:
https://thegraph.com/hosted-service/subgraph/lpscrypt/waypointrinkeby

Subgraph repo indexes data into three entity types:

MetaNomads: stand-in for address-based users

Spaces: token information, including the list of all of its portals

Portals: the actual portal objects, with all of their geospacial and metaverse-traversal data stored for use by the front end

Built using scaffold-eth. Able to be run on localhost, or pointed to any EVM compatible chain. 

Mumbai Deployment
0x9db2f20e541412292677aa43e8d09732f3998992

Rinkeby Deployment
0x8f181e382dF37f4DAB729c1868D0A190A929D614

