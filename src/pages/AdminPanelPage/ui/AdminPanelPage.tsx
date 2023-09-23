import { useTranslation } from "react-i18next"

const AdminPanelPage = () => {
    const { t } = useTranslation("adminPanel")

    return <div>{t("Админ панель")}</div>
}

export default AdminPanelPage
