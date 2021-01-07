import {Alert as ReactAlert} from 'react-native';

export default function Alert(data, onPress) {
    function handleOnPress() {
        onPress(data);
    }

    ReactAlert.alert(
        "",
        "Are you sure you want to delete ?",
        [
            {
                text: "Cancel",
                onPress: () => null,
                style: "cancel"
            },
            {text: "OK", onPress: handleOnPress}
        ],
        {cancelable: false}
    );
}