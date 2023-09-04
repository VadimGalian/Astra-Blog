import { profileReducer } from "entities/Profile"
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"

const reducers: ReducersList = {
    profile: profileReducer,
}

interface ProfilePageProps {
    className?: string
}

function ProfilePage(props: ProfilePageProps) {
    const { className } = props

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div>Profile Page</div>
        </DynamicModuleLoader>
    )
}

export default ProfilePage
