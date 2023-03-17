//

const env = "staging" 

const masterConfig = {
  local: {
    server_url: "http://127.0.0.1:5173/",
  },
  staging: {
    server_url: "https://incandescent-disease.surge.sh/",
  }
}

export const client_url = masterConfig[env]["server_url"];
