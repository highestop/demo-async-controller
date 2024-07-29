import { IEffectCleanupController } from './effect-cleanup-controller'

// Abstract class with effect cleanup
export abstract class ClassWithEffect {
    constructor(controller: IEffectCleanupController) {
        controller.onCleanup(() => {
            if (process.env.NODE_ENV === 'development') {
                console.log('destroy class:', this.constructor.name)
            }
            this.cleanup()
        })
    }
    abstract cleanup(): void
}
