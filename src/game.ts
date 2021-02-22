import { RemoteQuestTracker } from "dcl-ecs-quests";
import { ProgressStatus } from "dcl-quests-client/quests-client-amd";

const cube = new Entity();

cube.addComponentOrReplace(
  new Transform({
    position: new Vector3(5, 5, 5),
  })
);

const shape = new BoxShape();

cube.addComponentOrReplace(shape);

const tracker = new RemoteQuestTracker("14ee5b0f-a782-4c4a-bb3d-abe0653522a9");

const onPointerDown = new OnPointerDown(async (e) => {
  await tracker.startQuest();
  await tracker.makeProgress("82d8d756-3c71-491c-a23f-ab2736aa458b", {
    type: "single",
    status: ProgressStatus.COMPLETED,
  });
  cube.removeComponent(onPointerDown);
});

cube.addComponent(onPointerDown);

engine.addEntity(cube);
