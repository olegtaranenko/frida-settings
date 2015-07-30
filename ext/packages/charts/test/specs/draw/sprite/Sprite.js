describe('Ext.draw.sprite.Sprite', function () {

    describe('transformation matrix calculation', function () {
        describe('default centers of scaling and rotation', function () {
            it('should apply transformation in the following order: scale, rotate, translate', function () {
                var theta = Math.PI / 2,
                    sin = Math.sin(theta),
                    cos = Math.cos(theta),
                    left = 100,
                    top = 100,
                    width = 100,
                    height = 100,
                    sx = 2,
                    sy = 0.5,
                    tx = 100,
                    ty = 50,
                    centerX = left + width / 2,
                    centerY = top + height / 2;

                var rect = new Ext.draw.sprite.Rect({
                    x: left,
                    y: top,
                    width: width,
                    height: height,
                    rotationRads: theta,
                    scalingX: sx,
                    scalingY: sy,
                    translationX: tx,
                    translationY: ty
                });

                var referenceMatrix = [
                    cos * sx, sin * sx,
                    -sin * sy, cos * sy,
                    cos * (centerX * (1 - sx) - centerX) - sin * (centerY * (1 - sy) - centerY) + centerX + tx,
                    sin * (centerX * (1 - sx) - centerX) + cos * (centerY * (1 - sy) - centerY) + centerY + ty
                ];

                rect.applyTransformations(true);
                expect(rect.attr.matrix.elements).toEqual(referenceMatrix);
            });
        });
        describe('custom centers of scaling and rotation', function () {
            it('should apply transformation in the following order: scale, rotate, translate', function () {
                var theta = Math.PI / 2,
                    sin = Math.sin(theta),
                    cos = Math.cos(theta),
                    left = 100,
                    top = 100,
                    width = 100,
                    height = 100,
                    sx = 2,
                    sy = 0.5,
                    tx = 100,
                    ty = 50,
                    scalingCenterX = 50,
                    scalingCenterY = 50,
                    rotationCenterX = 150,
                    rotationCenterY = 150;

                var rect = new Ext.draw.sprite.Rect({
                    x: left,
                    y: top,
                    width: width,
                    height: height,
                    rotationRads: theta,
                    scalingX: sx,
                    scalingY: sy,
                    translationX: tx,
                    translationY: ty,
                    rotationCenterX: rotationCenterX,
                    rotationCenterY: rotationCenterY,
                    scalingCenterX: scalingCenterX,
                    scalingCenterY: scalingCenterY
                });

                var referenceMatrix = [
                    cos * sx, sin * sx,
                    -sin * sy, cos * sy,
                    cos * (scalingCenterX * (1 - sx) - rotationCenterX) - sin * (scalingCenterY * (1 - sy) - rotationCenterY) + rotationCenterX + tx,
                    sin * (scalingCenterX * (1 - sx) - rotationCenterX) + cos * (scalingCenterY * (1 - sy) - rotationCenterY) + rotationCenterY + ty
                ];

                rect.applyTransformations(true);
                expect(rect.attr.matrix.elements).toEqual(referenceMatrix);
            });
        });
    });

    describe('remove', function () {
        it("should remove itself from the surface, returning itself or null (if already removed)", function () {
            var surface = new Ext.draw.Surface({}),
                sprite = new Ext.draw.sprite.Rect({}),
                id = sprite.getId(),
                result;

            surface.add(sprite);
            result = sprite.remove();

            expect(surface.getItems().length).toBe(0);
            expect(surface.get(id)).toBe(undefined);
            expect(result).toEqual(sprite);

            result = sprite.remove(); // sprite with no surface, expect not to throw
            expect(result).toBe(null);

            sprite.destroy();
            surface.destroy();
        });
    });

    describe('destroy', function () {
        it("should remove itself from the surface", function () {
            var surface = new Ext.draw.Surface({}),
                sprite = new Ext.draw.sprite.Rect({}),
                id = sprite.getId();

            surface.add(sprite);
            sprite.destroy();

            expect(surface.getItems().length).toBe(0);
            expect(surface.get(id)).toBe(undefined);

            surface.destroy();
        });
    });

});