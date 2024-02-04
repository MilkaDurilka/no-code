import { Flex, Spin } from 'antd';
import styles from './index.module.css'

export const AnimatedBlock = () => {
    return (
        <div className={styles.container}>
            <Flex className={styles.animate} align="center" gap="middle">
                <Spin size="small" />
                <Spin />
                <Spin size="large" />
            </Flex>
        </div>
    )
}
