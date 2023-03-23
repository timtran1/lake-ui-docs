import {Button, Dropdown, DropdownItem} from "@asynctech/lake-ui";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";

function MyComponent() {
    return (
        <div>
            <Dropdown renderToggle={
                <Button className={`bg-black text-white`} hoverEffect={false}>
                    Show dropdown
                    <FontAwesomeIcon className="ml-2 text-xs" icon={faAngleDown}/>
                </Button>
            }>
                <DropdownItem>foo</DropdownItem>
                <DropdownItem>bar</DropdownItem>
            </Dropdown>


            <Dropdown left renderToggle={
                <Button className={`bg-black text-white`} hoverEffect={false}>
                    Show dropdown on the left
                    <FontAwesomeIcon className="ml-2 text-xs" icon={faAngleDown}/>
                </Button>
            }>
                <DropdownItem>foo</DropdownItem>
                <DropdownItem>bar</DropdownItem>
            </Dropdown>

            <Dropdown top renderToggle={
                <Button className={`bg-black text-white`} hoverEffect={false}>
                    Show dropdown up top
                    <FontAwesomeIcon className="ml-2 text-xs" icon={faAngleDown}/>
                </Button>
            }>
                <DropdownItem>foo</DropdownItem>
                <DropdownItem>bar</DropdownItem>
            </Dropdown>

            <Dropdown top left renderToggle={
                <Button className={`bg-black text-white`} hoverEffect={false}>
                    Show dropdown up top left
                    <FontAwesomeIcon className="ml-2 text-xs" icon={faAngleDown}/>
                </Button>
            }>
                <DropdownItem>foo</DropdownItem>
                <DropdownItem>bar</DropdownItem>
            </Dropdown>
        </div>
    )
}