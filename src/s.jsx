import {Button, Dialog} from "@asynctech/lake-ui";
import {useState} from "react";

function MyComponent() {
    const [dialogOpen, setDialogOpen] = useState(false)

    return (
        <div>
            <Button style={{backgroundColor: 'black'}} onClick={() => setDialogOpen(true)}>
                Open a dialog
            </Button>
            <Dialog useOpen={[dialogOpen, setDialogOpen]} style={{
                maxWidth: '24rem',
                backgroundImage: 'linear-gradient(to right, #f97316, #fcd34d)',
                color: 'white',
                borderRadius: '0',
            }}>
                <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                }}>You opened a Dialog!</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <Button style={{
                    backgroundColor: 'white',
                    color: 'black',
                    marginTop: '0.5rem',
                }} onClick={() => setDialogOpen(false)}>Close</Button>
            </Dialog>
        </div>
    )
}