import React, { useEffect, useState } from "react";
import { Akord } from "@akord/akord-js";

const VaultList = (props) => {
    const [vaults, setVaults] = useState();
    const [email, setEmail] = useState(null);
    const [pass, setPass] = useState(null);
    const [state, setState] = useState("INIT");

    async function getVaults() {
        if (!email || !pass)
            return;

        setState("LOADING")
        const { akord } = await Akord.auth.signIn(email, pass);
        const vaults = await akord.vault.list();
        console.log(vaults);
        setVaults(vaults);
        setState("LOADED")
    }

    return (
        <>
            {(state == "INIT") &&
                <div>
                    <h4>Example: List my vaults</h4>
                    <p>
                        Akord email:<br />
                        <input type="email" autoFocus onChange={(e) => setEmail(e.target.value)} />
                    </p>
                    <p>
                        Password:<br />
                        <input type="password" onChange={(e) => setPass(e.target.value)} />
                    </p>
                    <div>
                        <button onClick={getVaults}>Get Vaults</button>
                    </div>
                </div>
            }

            {(state == "LOADING") &&
                <div>Loading vaults ...</div>
            }

            {(state == "LOADED") &&
                <ol>
                    {
                        vaults.sort((a, b) => a.name > b.name).map(function (vault, index) {
                            return <li key={index}>
                                {vault.name}
                                <code>(<a href={`http://v2.akord.com/vaults/${vault.status.toLowerCase()}/${vault.id}/assets`} target="_blank" >
                                    {vault.id.slice(0, 4) + "..." + vault.id.slice(-2)}
                                </a>)
                                </code>
                            </li>;
                        })
                    }
                </ol>
            }
        </>
    );
};

export default VaultList;
